export default defineNuxtRouteMiddleware((to, from) => {
  if (
    process.client &&
    from.path === '/quote-request' &&
    !['/quote-request', '/quote-result'].includes(to.path)
  ) {
    // localStorage.removeItem('quote-request-state')
    const state = useState('quote-request-state', () => ({}))
    state.value = {}
  }
})
