// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxt/scripts',
    '@vee-validate/nuxt',
    'nuxt-swiper',
  ],
  plugins: ['~/plugins/gsap.client'],
  devtools: { enabled: true },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/fonts.css',
    '~/assets/css/widgetStyles.css',
    'flag-icons/css/flag-icons.min.css',
  ],
  compatibilityDate: '2025-05-15',
  app: {
    head: {
      link: [
        {
          rel: 'preload',
          href: '/fonts/pp-neue-montreal-300.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/pp-neue-montreal-400.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
        {
          rel: 'preload',
          href: '/fonts/pp-neue-montreal-500.woff2',
          as: 'font',
          type: 'font/woff2',
          crossorigin: 'anonymous',
        },
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  image: {
    dir: 'public',
  },
  icon: {
    customCollections: [
      {
        prefix: 'app-icon',
        dir: './assets/icons',
      },
      {
        prefix: 'flags',
        dir: './assets/icons/flags',
        normalizeIconName: false,
      },
      {
        prefix: 'payment-method',
        dir: './assets/icons/payment-methods',
        normalizeIconName: false,
      },
    ],
  },
  scripts: {
    globals: {
      zendesk: {
        id: 'ze-snippet',
        src: `https://static.zdassets.com/ekr/snippet.js?key=${process.env.ZENDESK_API_KEY}`,
        async: true,
        tagPosition: 'bodyClose',
      },
      widget: {
        // TODO: CheckoutId needed to display widget
        src: `https://eu-test.oppwa.com/v1/paymentWidgets.js?checkoutId=${process.env.ZENDESK_API_KEY}`,
        async: true,
        tagPosition: 'bodyClose',
      },
      widgetOptions: {
        src: `/js-widget.js`,
        async: true,
        tagPosition: 'bodyClose',
      },
    },
  },
})
