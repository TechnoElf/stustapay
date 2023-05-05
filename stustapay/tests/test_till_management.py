# pylint: disable=attribute-defined-outside-init,unexpected-keyword-arg,missing-kwoa
from stustapay.core.schema.product import NewProduct
from stustapay.core.schema.till import NewTill, NewTillButton, NewTillLayout, NewTillProfile
from stustapay.core.schema.user import CASHIER_ROLE_NAME, FINANZORGA_ROLE_NAME, ADMIN_ROLE_NAME
from stustapay.core.service.common.error import AccessDenied
from stustapay.core.service.product import ProductService
from .common import BaseTestCase


class TillManagementTest(BaseTestCase):
    async def asyncSetUp(self) -> None:
        await super().asyncSetUp()

        self.product_service = ProductService(
            db_pool=self.db_pool, config=self.test_config, auth_service=self.auth_service
        )

    async def test_basic_till_button_workflow(self):
        product1 = await self.product_service.create_product(
            token=self.admin_token, product=NewProduct(name="Helles 0,5l", price=3, tax_name="ust", is_locked=True)
        )
        product2 = await self.product_service.create_product(
            token=self.admin_token, product=NewProduct(name="Radler 0,5l", price=2.5, tax_name="ust", is_locked=True)
        )
        product_pfand = await self.product_service.create_product(
            token=self.admin_token, product=NewProduct(name="Pfand", price=2.5, tax_name="ust", is_locked=True)
        )

        button = await self.till_service.layout.create_button(
            token=self.admin_token,
            button=NewTillButton(name="Helles 0,5l", product_ids=[product1.id, product_pfand.id]),
        )
        self.assertEqual(button.name, "Helles 0,5l")
        self.assertEqual(button.price, 5.5)

        with self.assertRaises(AccessDenied):
            await self.till_service.layout.create_button(
                token=self.cashier_token,
                button=NewTillButton(name="Helles 0,5l", product_ids=[product1.id, product_pfand.id]),
            )

        updated_button = await self.till_service.layout.update_button(
            token=self.admin_token,
            button_id=button.id,
            button=NewTillButton(name="Radler 0,5l", product_ids=[product2.id, product_pfand.id]),
        )
        self.assertEqual(updated_button.name, "Radler 0,5l")
        self.assertEqual(updated_button.price, 5)

        buttons = await self.till_service.layout.list_buttons(token=self.admin_token)
        self.assertEqual(len(buttons), 1)
        self.assertTrue(updated_button in buttons)

        with self.assertRaises(AccessDenied):
            await self.till_service.layout.delete_button(token=self.cashier_token, button_id=updated_button.id)

        deleted = await self.till_service.layout.delete_button(token=self.admin_token, button_id=updated_button.id)
        self.assertTrue(deleted)

    async def test_basic_till_workflow(self):
        button1 = await self.till_service.layout.create_button(
            token=self.admin_token, button=NewTillButton(name="Helles 1,0l", product_ids=[])
        )
        button2 = await self.till_service.layout.create_button(
            token=self.admin_token, button=NewTillButton(name="Helles 0,5l", product_ids=[])
        )
        till_layout = await self.till_service.layout.create_layout(
            token=self.admin_token,
            layout=NewTillLayout(name="layout1", description="", button_ids=[button1.id, button2.id]),
        )
        till_profile = await self.till_service.profile.create_profile(
            token=self.admin_token,
            profile=NewTillProfile(
                name="profile1",
                description="",
                layout_id=till_layout.id,
                allow_top_up=False,
                allow_cash_out=False,
                allow_ticket_sale=False,
                allowed_role_names=[ADMIN_ROLE_NAME, FINANZORGA_ROLE_NAME, CASHIER_ROLE_NAME],
            ),
        )
        till = await self.till_service.create_till(
            token=self.admin_token,
            till=NewTill(
                name="Pot 1",
                description="Pottipot",
                tse_id=None,
                active_shift=None,
                active_profile_id=till_profile.id,
            ),
        )
        self.assertEqual(till.name, "Pot 1")

        with self.assertRaises(AccessDenied):
            await self.till_service.create_till(
                token=self.cashier_token,
                till=NewTill(
                    name="Pot 1",
                    description="Pottipot",
                    tse_id=None,
                    active_shift=None,
                    active_profile_id=till_profile.id,
                ),
            )

        updated_till = await self.till_service.update_till(
            token=self.admin_token,
            till_id=till.id,
            till=NewTill(
                name="Pot 2",
                description="Pottipot - new",
                tse_id=None,
                active_shift=None,
                active_user_id=None,
                active_profile_id=till_profile.id,
            ),
        )
        self.assertEqual(updated_till.name, "Pot 2")
        self.assertEqual(updated_till.description, "Pottipot - new")

        tills = await self.till_service.list_tills(token=self.admin_token)
        self.assertEqual(len(tills), 1)
        self.assertEqual(tills[0].name, "Pot 2")

        with self.assertRaises(AccessDenied):
            await self.till_service.delete_till(token=self.cashier_token, till_id=till.id)

        deleted = await self.till_service.delete_till(token=self.admin_token, till_id=till.id)
        self.assertTrue(deleted)

    async def test_button_references_locked_products(self):
        product = await self.product_service.create_product(
            token=self.admin_token, product=NewProduct(name="foo", is_locked=False, price=5, tax_name="ust")
        )
        with self.assertRaises(Exception):
            await self.till_service.layout.create_button(
                token=self.admin_token, button=NewTillButton(name="foo", product_ids=[product.id])
            )

        product = await self.product_service.update_product(
            token=self.admin_token,
            product_id=product.id,
            product=NewProduct(name="foo", is_locked=True, price=5, tax_name="ust"),
        )
        button = await self.till_service.layout.create_button(
            token=self.admin_token, button=NewTillButton(name="foo", product_ids=[product.id])
        )
        self.assertIsNotNone(button)

    async def test_button_references_max_one_variable_price_product(self):
        product1 = await self.product_service.create_product(
            token=self.admin_token, product=NewProduct(name="p1", is_locked=True, fixed_price=False, tax_name="ust")
        )
        product2 = await self.product_service.create_product(
            token=self.admin_token, product=NewProduct(name="p2", is_locked=True, fixed_price=False, tax_name="ust")
        )
        button = await self.till_service.layout.create_button(
            token=self.admin_token, button=NewTillButton(name="foo", product_ids=[product1.id])
        )
        self.assertIsNotNone(button)

        with self.assertRaises(Exception):
            await self.till_service.layout.update_button(
                token=self.admin_token,
                button_id=button.id,
                button=NewTillButton(name="foo", product_ids=[product1.id, product2.id]),
            )

    async def test_button_references_max_one_returnable_product(self):
        product1 = await self.product_service.create_product(
            token=self.admin_token,
            product=NewProduct(name="p1", is_locked=True, price=5, is_returnable=True, tax_name="ust"),
        )
        product2 = await self.product_service.create_product(
            token=self.admin_token,
            product=NewProduct(name="p2", is_locked=True, price=3, is_returnable=True, tax_name="ust"),
        )
        button = await self.till_service.layout.create_button(
            token=self.admin_token, button=NewTillButton(name="foo", product_ids=[product1.id])
        )
        self.assertIsNotNone(button)

        with self.assertRaises(Exception):
            await self.till_service.layout.update_button(
                token=self.admin_token,
                button_id=button.id,
                button=NewTillButton(name="foo", product_ids=[product1.id, product2.id]),
            )

    async def test_button_references_max_one_voucher_product(self):
        product1 = await self.product_service.create_product(
            token=self.admin_token,
            product=NewProduct(name="p1", is_locked=True, price=5, price_in_vouchers=3, tax_name="ust"),
        )
        product2 = await self.product_service.create_product(
            token=self.admin_token,
            product=NewProduct(name="p2", is_locked=True, price=3, price_in_vouchers=2.4, tax_name="ust"),
        )
        button = await self.till_service.layout.create_button(
            token=self.admin_token, button=NewTillButton(name="foo", product_ids=[product1.id])
        )
        self.assertIsNotNone(button)

        with self.assertRaises(Exception):
            await self.till_service.layout.update_button(
                token=self.admin_token,
                button_id=button.id,
                button=NewTillButton(name="foo", product_ids=[product1.id, product2.id]),
            )