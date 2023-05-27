package de.stustanet.stustapay.ui.payinout.payout


import androidx.compose.foundation.layout.Box
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material.Card
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.window.Dialog
import de.stustanet.stustapay.ui.common.DialogDisplayState
import de.stustanet.stustapay.ui.common.pay.CashConfirmView
import de.stustanet.stustapay.ui.common.pay.CashECCallback

@Preview
@Composable
fun PreviewCashOutConfirmDialog() {
    Box(
        modifier = Modifier.fillMaxSize(),
        contentAlignment = Alignment.Center,
    ) {
        CashOutConfirmCard(
            onConfirm = {},
            onAbort = {},
            getAmount = { 4212u },
        )
    }
}

@Composable
fun PayOutConfirmDialog(
    state: DialogDisplayState,
    onConfirm: () -> Unit = {},
    onAbort: () -> Unit = {},
    getAmount: () -> UInt,
    status: @Composable () -> Unit = {},
) {
    if (state.isOpen()) {
        Dialog(
            onDismissRequest = {
                state.close()
            },
        ) {
            CashOutConfirmCard(
                onConfirm = onConfirm,
                onAbort = onAbort,
                status = status,
                getAmount = getAmount,
            )
        }
    }
}


@Composable
fun CashOutConfirmCard(
    onConfirm: () -> Unit,
    onAbort: () -> Unit,
    getAmount: () -> UInt,
    status: @Composable () -> Unit = {},
) {
    Card(
        shape = RoundedCornerShape(10.dp),
        modifier = Modifier
            .padding(horizontal = 0.dp, vertical = 10.dp)
            .fillMaxWidth(),
        elevation = 8.dp,
    ) {
        Box(
            modifier = Modifier
                .padding(10.dp)
                .fillMaxWidth(),
            contentAlignment = Alignment.Center,
        ) {
            CashConfirmView(
                status = status,
                getAmount = getAmount,
                question = "Payed to user?",
                goBack = onAbort,
                onPay = CashECCallback.NoTag(onCash = onConfirm)
            )
        }
    }
}