<template>
  <section class="w-full pt-20 md:pt-60 @container/main">
    <div
      class="merchant-wrapper w-full flex flex-col md:flex-row gap-50"
    >
      <div class="flex justify-end">
        <div class="relative">
          <div class="z-20">
            <NuxtImg
              preload
              :src="`/img/payment_gateway_hero.png`"
              alt="item.imageAlt"
              class="merchant-image -ml-[380px] max-h-[610px] min-h-[400px] min-w-[800px] object-contain object-center drop-shadow-[0px_6.12764px_49.0212px_rgba(0,0,0,0.15)]"
              format="png"
            />
          </div>
          <div
            class="merchant-gradient absolute bottom-0 left-1/2 -translate-x-[300px] h-[247px] inset-x-0 bg-[radial-gradient(52.86%_52.86%_at_50%_100%,rgba(200,198,240,0.4)_0%,rgba(255,255,255,0)_100%)]"
          />
        </div>
      </div>

      <div class="merchant-text w-auto px-10 md:px-0 min-w-[400px] flex flex-col justify-center max-md:items-center">
        <Typography
          size="heading-2"
          class="max-md:text-center max-md:text-mobile-heading-2 mb-20"
        >
          Merchant Account
        </Typography>
        <Typography
          size="heading-5"
          class="max-md:text-center max-md:text-mobile-heading-6 text-primary-400 max-w-200 max-md:mb-15"
        >
          Accept Payment Globally designed for Online and Mobile
        </Typography>
      </div>
    </div>
    <div class="w-full max-h-fit flex flex-col mt-40 md:mt-0">
      <div id="world_map" class="mb-blocks-gap hidden md:block" />
      <div class="mb-30 md:mb-130 relative z-10">
        <Typography
          size="heading-4"
          weight="medium"
          class="max-md:text-mobile-heading-4 max-md:text-center md:w-[305px] mb-20"
        >
          Available Payment Method <span class="font-light">per Country</span>
        </Typography>
        <WorldMap />
      </div>
      <div class="mb-blocks-gap max-md:-mx-10">
        <Typography
          size="heading-4"
          weight="light"
          class="max-md:px-10 max-md:text-mobile-heading-4 text-center mb-10 md:mb-20"
        >
          <span class="font-medium">Innovations</span> to drive conversions and
          growth
        </Typography>
        <Typography
          size="body-large"
          class="max-md:px-10 max-md:text-mobile-body-large text-center mb-40 max-w-[648px] mx-auto"
        >
          Increase sales and reduce the cost of ownership by enabling better
          payment experiences and connecting with global partners.
        </Typography>

        <AppAccordion :items="paymentGatewayAccordionItems" />
      </div>
      <div class="mb-blocks-gap">
        <Typography
          size="heading-4"
          weight="light"
          class="max-md:px-10 max-md:text-mobile-heading-4 text-center mb-10 md:mb-20"
        >
          <span class="font-medium">Gateway</span>
          – Back Office System
        </Typography>
        <Typography
          size="body-large"
          class="max-md:px-10 max-md:text-mobile-body-large text-center mb-10 md:mb-40 max-w-[648px] mx-auto"
        >
          Increase sales and reduce the cost of ownership by enabling better
          payment experiences and connecting with global partners.
        </Typography>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10 gap-y-30 mt-24">
          <FeatureItem
            v-for="(item, index) in payment_gateway_features"
            :key="index"
            :item="item"
          />
        </div>
      </div>
    </div>
  </section>
  <CheckoutSection>
    <Typography size="heading-3" weight="medium" class="text-center">
      Checkout Options
    </Typography>
  </CheckoutSection>
  <section class="w-full pt-app-default pb-blocks-gap flex justify-center">
    <div class="w-full max-h-fit flex flex-col">
      <div
        class="bg-[#F6F6F6] md:rounded-app-big max-md:-mx-10 flex flex-col items-center p-10"
      >
        <div class="max-w-[130px] max-h-fit -mt-45">
          <NuxtImg
            :src="`/img/payment_gateway_shield.png`"
            class="w-full"
            loading="lazy"
            format="png"
          />
        </div>
        <Typography
          size="heading-4"
          weight="medium"
          class="max-md:text-mobile-heading-4 text-center mb-10"
        >
          Security <span class="md:font-light">at QashPay</span>
        </Typography>
        <div class="text-white px-10 py-5 bg-[#8D45DE] max-w-fit mb-10">
          <Typography
            size="heading-6"
            weight="medium"
            class="max-md:text-body-normal text-center"
          >
            Enterprise Grade
          </Typography>
        </div>
        <Typography
          size="body-large"
          class="max-w-[648px] max-md:text-mobile-body-normal text-center mb-15"
        >
          QashPay is built for the security, privacy, and fraud prevention of
          regulated industries. We have leading enterprise customers around the
          world such as financials services, healthcare, and education
        </Typography>
        <div class="flex flex-col md:flex-row gap-10">
          <div class="flex-1 bg-white rounded-2xl p-11">
            <Typography
              size="heading-6"
              weight="medium"
              class="max-md:text-mobile-heading-6 mb-8"
            >
              Security
            </Typography>
            <Typography>
              Payment Gateway that’s fully PCI DSS Level 1 certified and is a
              member of the PCI Initiative. Our data recovery sites and two
              active clients have a highly secure and resilient payment service
              with 99.99% availability.
            </Typography>
          </div>
          <div class="flex-1 bg-white rounded-2xl p-11">
            <Typography
              size="heading-6"
              weight="medium"
              class="max-md:text-mobile-heading-6 mb-8"
            >
              Privacy
            </Typography>
            <Typography>
              Qashpay employs strict technical access controls and internal
              policies to protect user privacy. We have implemented tools and
              controls to enable compliance with GDPR, which is considered as
              one of the strongest privacy protection standards.
            </Typography>
          </div>
          <div class="flex-1 bg-white rounded-2xl p-11">
            <Typography
              size="heading-6"
              weight="medium"
              class="max-md:text-mobile-heading-6 mb-8"
            >
              Fraud Prevention
            </Typography>
            <Typography>
              Includes more than 120 risk checks, easily configured within our
              user interface, the Business Intelligence Platform. For an even
              simpler solution, our payment experts have devised OneClickSafe,
              three bundled fraud prevention options – smart, advances, and
              excellent - that can be selected or change with just one click.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import FeatureItem from '~/components/PaymentGateway/FeatureItem.vue'
import { payment_gateway_features } from '~/utils/payment_gateway_features'
import { paymentGatewayAccordionItems } from '~/utils/paymentGatewayAccordionItems'

useHead({
  title: 'QashPay | Merchant Account'
})
</script>

<style scoped>
@media screen and (max-width: 1280px) {
  .merchant-wrapper {
    gap: 20px;
  }
  .merchant-image {
    object-position: right center;
    margin-left: -250px;
  }
}
@media screen and (max-width: 1024px) {
  .merchant-wrapper {
    gap: 40px;
  }
  .merchant-image {
    object-position: right center;
    margin-left: -250px;
  }
  .merchant-text {
    min-width: 250px;
  }
}
@media screen and (max-width: 845px) {
  .merchant-image {
    min-width: 700px;
    margin-left: -220px;
  }
}
@media screen and (max-width: 767px) {
  .merchant-image {
    min-width: 0;
    max-width: none;
    max-height: none;
    min-height: 0;
    width: 110vw;
    height: 30vh;
    margin-left: -5%;
  }

  .merchant-gradient {
    left: 0;
    transform: translateX(0);
    translate: none;
    width: 100%;
    background-position: center bottom;
  }
}
</style>
