import { OverlayScrollbars } from 'overlayscrollbars'
import 'overlayscrollbars/overlayscrollbars.css'

export default defineNuxtPlugin(() => {
  if (process.client) {
    OverlayScrollbars(document.body, {
      scrollbars: {
        autoHide: 'scroll',
        theme: 'os-theme-dark',
      },
    })
  }
})
