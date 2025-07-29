<template>
  <section
    class="w-full pt-60 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center"
  >
    <div class="w-full max-h-fit flex flex-col">
      <div class="-mx-10 md:-mx-[calc((100vw-100%)/2)] mb-30">
        <div class="flex flex-col-reverse md:flex-row items-center">
          <div class="flex-1">
            <NuxtImg
              preload
              :src="`/img/payment_gateway_hero.png`"
              alt="item.imageAlt"
              class="w-full"
              format="webp"
            />
          </div>
          <div class="flex-1">
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
      </div>
      <div class="mb-30">
        <Typography
          size="heading-4"
          weight="medium"
          class="max-md:text-mobile-heading-4 max-md:text-center md:w-[305px] mb-20"
        >
          Available Payment Method <span class="font-light">per Country</span>
        </Typography>
        <WorldMap />
      </div>
      <div class="mb-30 max-md:-mx-10">
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
          class="max-md:px-10 max-md:text-mobile-body-large text-center mb-10 md:mb-40"
        >
          Increase sales and reduce the cost of ownership by enabling better
          payment experiences and connecting with global partners.
        </Typography>
        <AppTabs :tabs="['Plugin Ready', 'Fraud Prevention', 'Pay by Link']">
          <template #tab-0>
            <PluginReadyTab />
          </template>
          <template #tab-1>
            <FraudPreventionTab />
          </template>
          <template #tab-2>
            <PayByLinkTab />
          </template>
        </AppTabs>
      </div>
      <div class="mb-30">
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
          class="max-md:px-10 max-md:text-mobile-body-large text-center mb-10 md:mb-40"
        >
          Increase sales and reduce the cost of ownership by enabling better
          payment experiences and connecting with global partners.
        </Typography>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-y-16 mt-24">
          <FeatureItem
            v-for="(item, index) in payment_gateway_features"
            :key="index"
            :item="item"
          />
        </div>
      </div>
      <div class="mb-80">
        <Typography
          size="heading-4"
          weight="medium"
          class="max-md:text-mobile-heading-4 text-center mb-20"
        >
          Checkout Options
        </Typography>
        <CheckoutItem
          :item="{
            image: 'home_checkout_1',
            imageAlt: 'Payment with credit card',
            title: 'Embedded Checkout',
          }"
          :index="0"
        >
          Customisable web page to host your checkout, allowing the shopper’s
          user experience to be on brand with your messaging.
        </CheckoutItem>
      </div>
      <div
        class="bg-[#F6F6F6] md:rounded-app-big max-md:-mx-10 flex flex-col items-center p-10"
      >
        <div class="max-w-[130px] max-h-fit -mt-45">
          <NuxtImg
            :src="`/img/payment_gateway_shield.png`"
            class="w-full"
            loading="lazy"
            format="webp"
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
              with 99.99$ availability.
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
import PluginReadyTab from '~/components/PaymentGateway/PluginReadyTab.vue'
import FraudPreventionTab from '~/components/PaymentGateway/FraudPreventionTab.vue'
import PayByLinkTab from '~/components/PaymentGateway/PayByLinkTab.vue'
import FeatureItem from '~/components/PaymentGateway/FeatureItem.vue'
import { payment_gateway_features } from '~/utils/payment_gateway_features'
import CheckoutItem from '~/components/Home/CheckoutSection/CheckoutItem.vue'
</script>
