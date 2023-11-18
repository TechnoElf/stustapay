# pylint: disable=attribute-defined-outside-init,unexpected-keyword-arg,missing-kwoa
import pytest

from stustapay.core.schema.tax_rate import TaxRate
from stustapay.core.schema.ticket import NewTicket
from stustapay.core.service.common.error import AccessDenied
from stustapay.core.service.ticket import TicketService

from .conftest import Cashier


async def test_basic_ticket_workflow(
    ticket_service: TicketService, tax_rate_none: TaxRate, tax_rate_ust: TaxRate, admin_token: str, cashier: Cashier
):
    ticket = await ticket_service.create_ticket(
        token=admin_token,
        ticket=NewTicket(
            name="Test Ticket",
            price=12,
            tax_rate_id=tax_rate_none.id,
            is_locked=False,
            restrictions=[],
            initial_top_up_amount=8,
        ),
    )
    assert ticket.name == "Test Ticket"

    with pytest.raises(AccessDenied):
        await ticket_service.create_ticket(
            token=cashier.token,
            ticket=NewTicket(
                name="Updated Test Ticket",
                price=12,
                tax_rate_id=tax_rate_ust.id,
                is_locked=True,
                restrictions=[],
                initial_top_up_amount=8,
            ),
        )

    updated_ticket = await ticket_service.update_ticket(
        token=admin_token,
        ticket_id=ticket.id,
        ticket=NewTicket(
            name="Updated Test Ticket",
            price=12,
            tax_rate_id=tax_rate_ust.id,
            is_locked=True,
            restrictions=[],
            initial_top_up_amount=4,
        ),
    )
    assert updated_ticket.name == "Updated Test Ticket"
    assert updated_ticket.initial_top_up_amount == 4
    assert updated_ticket.is_locked

    tickets = await ticket_service.list_tickets(token=admin_token)
    assert len(list(filter(lambda p: p.name == "Updated Test Ticket", tickets))) == 1

    with pytest.raises(AccessDenied):
        await ticket_service.delete_ticket(token=cashier.token, ticket_id=ticket.id)

    deleted = await ticket_service.delete_ticket(token=admin_token, ticket_id=ticket.id)
    assert deleted
