/**
 *
 * Please note:
 * This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * Do not edit this file manually.
 *
 */

@file:Suppress(
    "ArrayInDataClass",
    "EnumEntryName",
    "RemoveRedundantQualifierName",
    "UnusedImport"
)

package de.stustapay.api.models


import kotlinx.serialization.Serializable
import kotlinx.serialization.SerialName
import kotlinx.serialization.Contextual

/**
 * 
 *
 * @param userTagUid 
 * @param initialVoucherAmount 
 */
@Serializable

data class NewFreeTicketGrant (

    @SerialName(value = "user_tag_uid")
    val userTagUid: @Contextual com.ionspin.kotlin.bignum.integer.BigInteger,

    @SerialName(value = "initial_voucher_amount")
    val initialVoucherAmount: @Contextual com.ionspin.kotlin.bignum.integer.BigInteger? = com.ionspin.kotlin.bignum.integer.BigInteger(0)

)

