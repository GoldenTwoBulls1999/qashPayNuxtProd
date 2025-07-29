import {useState} from '#app'

export const useQuoteRequestState = () => {
  return useState<Record<string, any>>('quote-request-state', () => ({}))
}
