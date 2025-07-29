import {useState} from '#app'

type QuoteResponseState = {
    message: string
    successful: boolean
    quoteId: string
    firstName: string
    lastName: string
    companyName: string
    icFee: string
    transactionFee: string
    refundFee: string
    threeDSFee: string
    chargebackFee: string
    monthlyMin: string
    currency: string
    riskGroup: string
}

export const useQuoteResponseState = () => {
    return useState<QuoteResponseState>('quote-response-state', () => ({
        message: "",
        successful: false,
        quoteId: "",
        firstName: "",
        lastName: "",
        companyName: "",
        icFee: "",
        transactionFee: "",
        refundFee: "",
        threeDSFee: "",
        chargebackFee: "",
        monthlyMin: "",
        currency: "",
        riskGroup: ""
    }))
}