# pylint: disable=attribute-defined-outside-init,unexpected-keyword-arg,missing-kwoa
from stustapay.core.schema.user import (
    ADMIN_ROLE_ID,
    ADMIN_ROLE_NAME,
    CASHIER_ROLE_NAME,
    FINANZORGA_ROLE_NAME,
    INFOZELT_ROLE_NAME,
    NewUser,
    UserTag,
)
from stustapay.core.service.common.error import AccessDenied, InvalidArgument
from stustapay.tests.common import TerminalTestCase


class UserServiceTest(TerminalTestCase):
    async def asyncSetUp(self) -> None:
        await super().asyncSetUp()

        self.cashier_uid = await self.db_conn.fetchval(
            "insert into user_tag (node_id, uid) values ($1, 654321) returning uid", self.node_id
        )
        self.finanzorga_uid = await self.db_conn.fetchval(
            "insert into user_tag (node_id, uid) values ($1, 1337) returning uid", self.node_id
        )
        admin_tag_uid = await self.db_conn.fetchval(
            "insert into user_tag (node_id, uid) values ($1, 12345) returning uid", self.node_id
        )
        self.admin = await self.user_service.create_user_no_auth(
            node_id=self.node_id,
            new_user=NewUser(
                login="terminal_admin",
                description="",
                role_names=[ADMIN_ROLE_NAME],
                user_tag_uid=admin_tag_uid,
                display_name="Terminal",
            ),
        )
        await self.till_service.login_user(
            token=self.terminal_token, user_tag=UserTag(uid=admin_tag_uid), user_role_id=ADMIN_ROLE_ID
        )

    async def test_change_password(self):
        with self.assertRaises(AccessDenied):  # test with invalid password
            await self.user_service.change_password(token=self.admin_token, old_password="foobar", new_password="asdf")
        await self.user_service.change_password(token=self.admin_token, old_password="rolf", new_password="asdf")

        await self.user_service.login_user(username=self.admin_user.login, password="asdf")

    async def test_user_creation(self):
        cashier = await self.user_service.create_user_terminal(
            token=self.terminal_token,
            new_user=NewUser(
                login="test-cashier", display_name="", user_tag_uid=self.cashier_uid, role_names=[CASHIER_ROLE_NAME]
            ),
        )
        self.assertIsNotNone(cashier)
        self.assertEqual(cashier.login, "test-cashier")
        self.assertListEqual(cashier.role_names, [CASHIER_ROLE_NAME])
        self.assertIsNotNone(cashier.cashier_account_id)
        self.assertIsNone(cashier.transport_account_id)
        self.assertEqual(cashier.user_tag_uid, self.cashier_uid)
        # Test creation if user already exists, then this should return an error
        with self.assertRaises(InvalidArgument):
            await self.user_service.create_user_terminal(
                token=self.terminal_token,
                new_user=NewUser(
                    login="test-cashier", display_name="", user_tag_uid=self.cashier_uid, role_names=[CASHIER_ROLE_NAME]
                ),
            )

        cashier = await self.user_service.update_user_roles_terminal(
            token=self.terminal_token,
            user_tag_uid=self.cashier_uid,
            role_names=[INFOZELT_ROLE_NAME],
        )
        self.assertIsNotNone(cashier)
        self.assertListEqual(cashier.role_names, [INFOZELT_ROLE_NAME])

        with self.assertRaises(AccessDenied):
            await self.user_service.update_user_roles_terminal(
                token=self.terminal_token, user_tag_uid=self.cashier_uid, role_names=[FINANZORGA_ROLE_NAME]
            )
