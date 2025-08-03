<template>
  <section class="w-full bg-white">
    <div class="relative transition-opacity duration-300" :class="{'opacity-0': !slickReady}">
      <div class="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div class="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div ref="slickContainer" class="logos-slider px-0">
        <div v-for="logo in logos" :key="logo.id" class="slide-item w-auto mx-4">
          <div class="flex items-center justify-center transition-all duration-300 group py-5">
            <img
              :src="logo.src"
              :alt="logo.name"
              :title="logo.name"
              class="object-contain group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const slickContainer = ref<HTMLElement>()
const slickReady = ref(false)

const logos = [
  { id: 1, name: 'Affirm', src: '/payment-methods/Affirm.svg' },
  { id: 2, name: 'Alipay', src: '/payment-methods/Alipay.svg' },
  { id: 3, name: 'Amazon Pay', src: '/payment-methods/AmazonPay.svg' },
  { id: 4, name: 'American Express', src: '/payment-methods/AmericanExpress.svg' },
  { id: 5, name: 'Apple Pay', src: '/payment-methods/ApplePay.svg' },
  { id: 6, name: 'Bancontact', src: '/payment-methods/Bancontact.svg' },
  { id: 7, name: 'Bitcoin', src: '/payment-methods/Bitcoin.svg' },
  { id: 8, name: 'Bitcoin Cash', src: '/payment-methods/BitcoinCash.svg' },
  { id: 9, name: 'Bitpay', src: '/payment-methods/Bitpay.svg' },
  { id: 10, name: 'Citadele', src: '/payment-methods/Citadele.svg' },
  { id: 11, name: 'Diners', src: '/payment-methods/Diners.svg' },
  { id: 12, name: 'Discover', src: '/payment-methods/Discover.svg' },
  { id: 13, name: 'Elo', src: '/payment-methods/Elo.svg' },
  { id: 14, name: 'Etherium', src: '/payment-methods/Etherium.svg' },
  { id: 15, name: 'Facebook Pay', src: '/payment-methods/FacebookPay.svg' },
  { id: 16, name: 'Forbrugsforeningen', src: '/payment-methods/Forbrugsforeningen.svg' },
  { id: 17, name: 'Giropay', src: '/payment-methods/Giropay.svg' },
  { id: 18, name: 'Google Pay', src: '/payment-methods/GooglePay.svg' },
  { id: 19, name: 'iDeal', src: '/payment-methods/Ideal.svg' },
  { id: 20, name: 'Interac', src: '/payment-methods/Interac.svg' },
  { id: 21, name: 'JCB', src: '/payment-methods/JCB.svg' },
  { id: 22, name: 'Klarna', src: '/payment-methods/Klarna.svg' },
  { id: 23, name: 'Lightcoin', src: '/payment-methods/Lightcoin.svg' },
  { id: 24, name: 'Mada', src: '/payment-methods/Mada.svg' },
  { id: 25, name: 'Maestro', src: '/payment-methods/Maestro.svg' },
  { id: 26, name: 'MasterCard', src: '/payment-methods/MasterCard.svg' },
  { id: 27, name: 'Payoneer', src: '/payment-methods/Payoneer.svg' },
  { id: 28, name: 'PayPal', src: '/payment-methods/PayPal.svg' },
  { id: 29, name: 'Paysafe', src: '/payment-methods/Paysafe.svg' },
  { id: 30, name: 'Poli', src: '/payment-methods/Poli.svg' },
  { id: 31, name: 'Przelewy24', src: '/payment-methods/Przelewy24.svg' },
  { id: 32, name: 'Qiwi', src: '/payment-methods/Qiwi.svg' },
  { id: 33, name: 'SEPA', src: '/payment-methods/SEPA.svg' },
  { id: 34, name: 'Shop Pay', src: '/payment-methods/ShopPay.svg' },
  { id: 35, name: 'Skrill', src: '/payment-methods/Skrill.svg' },
  { id: 36, name: 'Sofort', src: '/payment-methods/Sofort.svg' },
  { id: 37, name: 'Stripe', src: '/payment-methods/Stripe.svg' },
  { id: 38, name: 'Trustly', src: '/payment-methods/Trustly.svg' },
  { id: 39, name: 'Union Pay', src: '/payment-methods/UnionPay.svg' },
  { id: 40, name: 'Venmo', src: '/payment-methods/Venmo.svg' },
  { id: 41, name: 'Verifone', src: '/payment-methods/Verifone.svg' },
  { id: 42, name: 'Visa', src: '/payment-methods/Visa.svg' },
  { id: 43, name: 'Webmoney', src: '/payment-methods/Webmoney.svg' },
  { id: 44, name: 'WeChat', src: '/payment-methods/WeChat.svg' },
  { id: 45, name: 'Yandex', src: '/payment-methods/Yandex.svg' },
];

const initializeSlick = () => {
  // @ts-ignore
  $(slickContainer.value).slick({
    variableWidth: true,
    slidesToShow: 1,
    initialSlide: 10,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    speed: 800,
    pauseOnHover: true,
    infinite: true,
    arrows: false,
    dots: false,
    centerMode: true
  })
}

onMounted(async () => {
  if (process.client && slickContainer.value) {
    // Подключаем jQuery и Slick через CDN
    const script = document.createElement('script')
    script.src = 'https://code.jquery.com/jquery-3.6.0.min.js'
    document.head.appendChild(script)

    script.onload = async () => {
      const slickScript = document.createElement('script')
      slickScript.src = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js'
      document.head.appendChild(slickScript)

      const slickCSS = document.createElement('link')
      slickCSS.rel = 'stylesheet'
      slickCSS.href = 'https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css'
      document.head.appendChild(slickCSS)

      slickScript.onload = () => {
        initializeSlick();

        setTimeout(() => {
          slickReady.value = true
        }, 2000)
      }
    }
  }
})
</script>
