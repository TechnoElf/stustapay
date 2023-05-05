package de.stustanet.stustapay.repository

import de.stustanet.stustapay.model.CompletedTicketSale
import de.stustanet.stustapay.model.NewTicketSale
import de.stustanet.stustapay.model.PendingTicketSale
import de.stustanet.stustapay.net.Response
import de.stustanet.stustapay.netsource.TicketRemoteDataSource
import javax.inject.Inject
import javax.inject.Singleton

@Singleton
class TicketRepository @Inject constructor(
    private val ticketRemoteDataSource: TicketRemoteDataSource,
) {
    suspend fun checkTicketSale(newTopUp: NewTicketSale): Response<PendingTicketSale> {
        return ticketRemoteDataSource.checkTicketSale(newTopUp)
    }

    suspend fun bookTicketSale(newTopUp: NewTicketSale): Response<CompletedTicketSale> {
        return ticketRemoteDataSource.bookTicketSale(newTopUp)
    }
}
