<template>
  <section class="w-full md:pt-45 pb-blocks-gap">
    <div class="w-full max-h-fit flex flex-col">
      <PartnersVideo src-webm="/img/QashPay_partner.webm" src-mp4="/img/QashPay_partner.mp4" :is-muted="true" />
      <div
        class="flex flex-col items-center bg-radial bg-radial-[ellipse_50%_50%_at_50%_100%] from-gray-200/20 to-white my-30"
      >
        <Typography size="heading-2" class="text-center mb-10">
          Become a Partner with QashPay
        </Typography>
        <Typography size="heading-5" class="text-center mb-30">
          Partner with best in class agent tools
        </Typography>
        <AppButton class="mb-36" color="black" to="#become-partner"
          >Become a Partner</AppButton
        >
      </div>
      <div class="flex flex-col mb-blocks-gap">
        <Typography size="heading-4" class="text-center pb-20">
          Types of Partners we work with
        </Typography>
        <div class="flex gap-20 flex-col md:flex-row">
          <div class="flex-1 flex flex-col border-b-1 border-primary-200">
            <div
              class="w-full mb-20 bg-[#F5F9FF] min-h-[150px] max-h-[150px] rounded-app-small flex justify-center items-center"
            >
              <img
                :src="`/img/partners_iso.svg`"
                alt="Independent Sales Organisation (ISO)"
              />
            </div>
            <div class="min-h-[40px] mb-9">
              <Typography
                size="body-large"
                weight="medium"
                class="!leading-[20px]"
              >
                Independent Sales Organisation (ISO)
              </Typography>
            </div>
            <Typography
              weight="normal"
              class="!leading-[20px] mb-20 text-primary-400"
            >
              Payment Gateways or other PSPs partner for access to our online
              tools to provide 1st level support. Best in class for onboarding
              with MIDs arriving within an hour, modern KYC and KYB electronic
              verification, transaction analytic data to manage merchants with
              chargeback ratios, success rates etc.
            </Typography>
          </div>
          <div class="flex-1 flex flex-col border-b-1 border-primary-200">
            <div
              class="w-full mb-20 bg-[#F5F9FF] min-h-[150px] max-h-[150px] rounded-app-small flex justify-center items-center"
            >
              <img
                :src="`/img/partners_agent.svg`"
                alt="Independent Sales Organisation (ISO)"
              />
            </div>
            <div class="min-h-[40px] mb-9">
              <Typography
                size="body-large"
                weight="medium"
                class="!leading-[20px]"
              >
                Referral Agent
              </Typography>
            </div>
            <Typography
              weight="normal"
              class="!leading-[20px] mb-20 text-primary-400"
            >
              Earn lucrative commissions by referring your interested merchants.
              QashPay handles all onboarding and account management. Submit lead
              via the Agent Portal. See application statuses and real-time
              commissions online built for desktop and mobile device.
            </Typography>
          </div>
          <div class="flex-1 flex flex-col border-b-1 border-primary-200">
            <div
              class="w-full mb-20 bg-[#F5F9FF] min-h-[150px] max-h-[150px] rounded-app-small flex justify-center items-center"
            >
              <img
                :src="`/img/partners_isv.svg`"
                alt="Independent Sales Organisation (ISO)"
              />
            </div>
            <div class="min-h-[40px] mb-9">
              <Typography
                size="body-large"
                weight="medium"
                class="!leading-[20px]"
              >
                Integrated Software<br />Vendors (ISV)
              </Typography>
            </div>
            <Typography
              weight="normal"
              class="!leading-[20px] mb-20 text-primary-400"
            >
              Integrate payments into your software applications and offer your
              users a global payments solution. QashPay provides your users with
              seamless onboarding and account management while you earn revenue
              from the transaction. Submit potential merchants via API,
              Affiliate weblinks and an embedded enquiring form. Transparency on
              commissions.
            </Typography>
          </div>
        </div>
      </div>

      <div
        class="relative max-md:-mx-10 flex flex-col items-center mb-blocks-gap"
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

        <Accordion :items="partnersAccordionItems" />
      </div>
      <div class="flex flex-col items-center mb-blocks-gap">
        <Typography size="heading-4" class="text-center mb-10">
          Partner Onboarding App
        </Typography>
        <Typography
          size="body-large"
          class="max-w-[648px] text-center mb-20 max-w-[648px] mx-auto"
        >
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
              format="png"
            />
          </div>
          <div
            class="flex flex-col min-[875px]:mt-25 min-w-[250px] min-[875px]:max-w-[300px] min-[875px]:pr-10"
          >
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
                  Instant messaging with Onboarding Team
                </Typography>
              </li>
              <li>
                <Typography>
                  Real time commission reports and transaction summaries
                </Typography>
              </li>
            </ul>
            <div class="flex gap-8 mt-20">
              <AppButton class="!px-0 !py-0 w-fit md:max-w-[115px]">
                <NuxtImg
                  preload
                  src="/img/appstore.png"
                  class="h-full"
                  format="png"
                />
              </AppButton>
              <AppButton class="!px-0 !py-0 w-fit md:max-w-[115px]">
                <NuxtImg
                  preload
                  src="/img/googleplay.png"
                  class="h-full"
                  format="png"
                />
              </AppButton>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
      <BecomePartnerForm />
    </div>
  </section>
</template>

<script setup lang="ts">
import Testimonials from '~/components/Partners/Testimonials.vue'
import BecomePartnerForm from '~/components/Partners/BecomePartnerForm/index.vue'
import PartnersVideo from '~/components/Partners/Video.vue'
import Accordion from '~/components/AppAccordion.vue'
import { partnersAccordionItems } from '~/utils/partnersAccordionItems'

useHead({
  title: 'QashPay | Partners'
})
</script>
