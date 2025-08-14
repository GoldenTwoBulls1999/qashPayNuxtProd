type QuoteResponseState = {
  message: string
  message_text: string
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
    message: '',
    message_text: '',
    successful: false,
    quoteId: '',
    firstName: '',
    lastName: '',
    companyName: '',
    icFee: '',
    transactionFee: '',
    refundFee: '',
    threeDSFee: '',
    chargebackFee: '',
    monthlyMin: '',
    currency: '',
    riskGroup: '',
  }))
}
