<template>
  <section
    class="w-full pt-60 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center"
  >
    <div class="w-full max-h-fit flex flex-col">
      <PartnersVideo />
      <div
        class="flex flex-col items-center bg-radial bg-radial-[ellipse_50%_50%_at_50%_100%] from-secondary-500/20 to-white mb-30"
      >
        <Typography size="heading-2" class="text-center mb-10">
          Become a Partner with QashPay
        </Typography>
        <Typography size="heading-5" class="text-center mb-30">
          Partner with best in class agent tools
        </Typography>
        <AppButton class="mb-36" color="black">Become partner</AppButton>
      </div>
      <div class="flex flex-col mb-40">
        <Typography
          size="heading-4"
          class="text-center pb-20 border-b-1 border-gray-400"
        >
          Types of Partners we work with
        </Typography>
        <div
          class="flex flex-col md:flex-row items-start justify-between gap-20 border-b-1 border-gray-400 px-20 py-10"
        >
          <Typography size="heading-6" weight="medium" class="min-w-[225px]">
            Independent Sales Organisation (ISO)
          </Typography>
          <Typography size="body-large">
            Payment Gateways or other PSPs partner for access to our online
            tools to provide 1st level support. Best in class for onboarding
            with MIDs arriving within an hour, modern KYC and KYB electronic
            verification, transaction analytic data to manage merchants with
            chargeback ratios, success rates etc.
          </Typography>
        </div>
        <div
          class="flex flex-col md:flex-row items-start justify-between gap-20 border-b-1 border-gray-400 px-20 py-10"
        >
          <Typography size="heading-6" weight="medium" class="min-w-[225px]">
            Referral Agent
          </Typography>
          <Typography size="body-large">
            Earn lucrative commissions by referring your interested merchants.
            QashPay handles all onboarding and account management. Submit lead
            via the Agent Portal. See application statuses and real-time
            commissions online built for desktop and mobile device.
          </Typography>
        </div>
        <div
          class="flex flex-col md:flex-row items-start justify-between gap-20 border-b-1 border-gray-400 px-20 py-10"
        >
          <Typography size="heading-6" weight="medium" class="min-w-[225px]">
            Integrated Software Vendors (ISV)
          </Typography>
          <Typography size="body-large">
            Integrate payments into your software applications and offer your
            users a global payments solution. QashPay provides your users with
            seamless onboarding and account management while you earn revenue
            from the transaction. Submit potential merchants via API, Affiliate
            weblinks and an embedded enquiring form. Transparency on
            commissions.
          </Typography>
        </div>
      </div>

      <div
        class="relative mt-18 max-md:-mx-10 flex flex-col items-center mb-40"
      >
        <Typography size="heading-4" class="text-center mb-10 px-10">
          Agent Portal
        </Typography>
        <Typography
          size="body-large"
          class="max-w-[648px] text-center mb-20 px-10 max-w-[648px] mx-auto"
        >
          Agent Portal is a real-time dashboard that provides data sets required
          to monitor at the agent, acquirer, scheme and merchant levels.
        </Typography>
        <AppTabs :tabs="['Transactions', 'Success Rate', 'Chargebacks']">
          <template #tab-0>
            <TransactionsTab />
          </template>
          <template #tab-1>
            <SuccessRateTab />
          </template>
          <template #tab-2>
            <ChargebacksTab />
          </template>
        </AppTabs>
      </div>
      <div class="flex flex-col items-center mb-40">
        <Typography size="heading-4" class="text-center mb-10">
          Partner Onboarding App
        </Typography>
        <Typography size="body-large" class="max-w-[648px] text-center mb-20 max-w-[648px] mx-auto">
          Agent Portal is a real-time dashboard that provides data sets required
          to monitor at the agent, acquirer, scheme and merchant levels.
        </Typography>
        <div class="flex flex-col min-[875px]:flex-row gap-30">
          <div class="relative min-[875px]:min-w-[610px]">
            <NuxtImg
              src="/img/partner_onboarding.png"
              alt="item.imageAlt"
              class="w-full"
              loading="lazy"
              format="webp"
            />
          </div>
          <div class="flex flex-col min-[875px]:mt-25 min-[875px]:pr-10">
            <Typography class="mb-11">
              Our onboarding process performs most of the heavy lifting required
              in a very time-consuming process.
            </Typography>
            <ul class="list-[square] pl-9">
              <li>
                <Typography>Online Application</Typography>
              </li>
              <li>
                <Typography>File Updates</Typography>
              </li>
              <li>
                <Typography>
                  Instant messaging with Onboarding Teal AQ
                </Typography>
              </li>
              <li>
                <Typography>
                  Real time commission reports and transaction summaries
                </Typography>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <Testimonials />
      <BecomePartnerForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import TransactionsTab from '~/components/Partners/TransactionsTab.vue'
import ChargebacksTab from '~/components/Partners/ChargebacksTab.vue'
import SuccessRateTab from '~/components/Partners/SuccessRateTab.vue'
import Testimonials from '~/components/Partners/Testimonials.vue'
import BecomePartnerForm from '~/components/Partners/BecomePartnerForm/index.vue'
import PartnersVideo from '~/components/Partners/Video.vue'
</script>
