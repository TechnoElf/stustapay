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
 * @param customerId 
 * @param newUserTagUid 
 * @param comment 
 */
@Serializable

data class SwitchTagPayload (

    @SerialName(value = "customer_id")
    val customerId: @Contextual com.ionspin.kotlin.bignum.integer.BigInteger,

    @SerialName(value = "new_user_tag_uid")
    val newUserTagUid: @Contextual com.ionspin.kotlin.bignum.integer.BigInteger,

    @SerialName(value = "comment")
    val comment: kotlin.String

)

