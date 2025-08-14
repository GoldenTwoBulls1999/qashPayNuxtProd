type UseQuoteRequestLoadingState = {
    isLoading: boolean
    progress: number
}

export const useQuoteRequestLoadingState = () => {
    return useState<UseQuoteRequestLoadingState>('quote-request-loading-state', () => ({
        isLoading: false,
        progress: 0
    }))
}