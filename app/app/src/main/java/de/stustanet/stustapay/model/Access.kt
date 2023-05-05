package de.stustanet.stustapay.model

/**
 * client-side privilege checks.
 */
object Access {
    // User permissions

    fun canSellFreeTicket(user: CurrentUser): Boolean {
        return user.privileges.any {
            it == Privilege.grant_free_tickets
        }
    }

    fun canCreateUser(user: CurrentUser): Boolean {
        return user.privileges.any {
            it == Privilege.user_management
        }
    }

    fun canSell(user: CurrentUser): Boolean {
        return user.privileges.any {
            it == Privilege.can_book_orders
        }
    }

    fun canHackTheSystem(user: CurrentUser): Boolean {
        return user.active_role_name == "admin"
    }

    // Till features
    fun canSellTicket(terminal: TerminalConfig): Boolean {
        return terminal.allow_ticket_sale
    }

    fun canTopUp(terminal: TerminalConfig): Boolean {
        return terminal.allow_top_up
    }
}