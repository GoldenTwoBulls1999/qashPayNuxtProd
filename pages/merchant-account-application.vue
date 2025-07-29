<template>
  <section
    class="w-full pt-60 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center"
  >
    <div class="w-full max-h-fit flex flex-col">
      <Typography size="heading-4" weight="medium" class="text-center mb-10">
        QashPay Merchant Account Application
      </Typography>
      <Typography size="heading-6" class="text-center mb-30">
        Card Registration - Monthly Billing
      </Typography>

      <div class="bg-[#F5F9FF] rounded-app-big mb-20">
        <div
          class="flex flex-col md:flex-row items-center gap-16 border-b-2 border-b-white py-20 px-20 md:px-40"
        >
          <div class="flex-1 flex flex-col gap-10">
            <Typography>
              QashPay requires all merchants to store a debit or credit card for
              the processing of their monthly Payment Gateway fees.
            </Typography>
            <Typography>
              Your monthly minimum payment will be debited automatically, and
              your card details will be securely stored in our PCI DSS Level
              1-compliant environment to facilitate the processing of these
              fees, as outlined:
            </Typography>
          </div>

          <div
            class="w-full flex-1 bg-white max-md:border-1 max-md:border-gray-border rounded-app-big px-10 py-11"
          >
            <div class="flex justify-between mb-19">
              <Typography
                size="body-large"
                weight="medium"
                class="max-md:text-mobile-body-large"
              >
                Interchange &plus;&plus;
              </Typography>
              <Typography
                size="body-large"
                weight="medium"
                class="max-md:text-mobile-body-large"
              >
                <span class="text-secondary-500">1.75&percnt;</span>
                &plus; GBP 0.18
              </Typography>
            </div>
            <div>
              <div class="flex justify-between">
                <Typography class="text-[14px]">Refunds</Typography>
                <Typography class="text-[14px]">GBP 0.50</Typography>
              </div>
              <div class="flex justify-between">
                <Typography class="text-[14px]">Monthly Minimum</Typography>
                <Typography class="text-[14px]">GBP 50.00</Typography>
              </div>
              <div class="flex justify-between">
                <Typography class="text-[14px]">3D Secure</Typography>
                <Typography class="text-[14px]">GBP 0.04</Typography>
              </div>
              <div class="flex justify-between">
                <Typography class="text-[14px]">Chargebacks</Typography>
                <Typography class="text-[14px]">GBP 25.00</Typography>
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col px-20 md:px-40 py-20">
          <div class="flex flex-col md:flex-row mb-20 gap-10">
            <AppCheckbox
              v-model="checkboxModel"
              :value="true"
              name="is_checked"
              class="flex-1"
            >
              <Typography class="text-primary-400">
                I agree with the Processing Fees and consent for my card to be
                stored and charged on a monthly bases
              </Typography>
            </AppCheckbox>
            <div class="flex-1 flex flex-col items-end">
              <Typography size="body-large">
                Total amount to be charged
              </Typography>
              <Typography size="body-large" weight="medium">
                GBP £50.00
              </Typography>
            </div>
          </div>
          <div class="bg-white rounded-app-big p-20">
            <form class="paymentWidgets" data-brands="VISA MASTER AMEX"></form>
          </div>
        </div>
      </div>
      <div
        class="bg-primary-100 max-w-fit mx-auto flex rounded-app-big p-11 gap-6"
      >
        <Icon
          mode="svg"
          width="27"
          height="27"
          name="app-icon:info-icon"
          class="min-w-[27px]"
        />
        <Typography>
          Please note that your card statement will show QashPay as the
          descriptor.
        </Typography>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import AppCheckbox from '~/components/AppCheckbox.vue'

const checkboxModel = defineModel<boolean>()
</script>
