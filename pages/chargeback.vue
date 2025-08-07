<template>
  <section
    class="w-full pt-60 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center @container/main"
  >
    <div class="w-full max-w-full max-h-fit flex flex-col">
      <div class="flex flex-col md:flex-row items-center gap-20 mb-blocks-gap">
        <div class="flex-1 flex flex-col gap-20">
          <Typography size="heading-3" weight="medium">
            Prevent and Recover Chargebacks with QashPay
          </Typography>
          <Typography class="text-primary-400">
            QashPay helps businesses — from startups to enterprises —
            automatically prevent chargebacks using Ethoca Alerts and Verifi
            RDR, while recovering lost revenue through automated representment.
          </Typography>
        </div>
        <div class="flex-1 max-w-full md:max-w-1/2">
          <Slider />
        </div>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-20 mb-25">
        <div class="flex-1 flex flex-col">
          <Typography size="heading-5" class="mb-10"> Prevention </Typography>
          <Typography size="heading-3" weight="medium" class="mb-20">
            Prevent up to 95% of chargebacks proactively
          </Typography>
          <Typography class="text-primary-400">
            Collaborate with issuers via Ethoca & Verifi to intercept disputes
            before they become chargebacks
          </Typography>
        </div>
        <div class="flex-1 max-w-full md:max-w-1/2">
          <NuxtImg
            :src="`/img/chargeback_feature_1.png`"
            alt="explanation of checkout process"
            class="w-full"
            loading="lazy"
            format="png"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20 mb-blocks-gap">
        <BenefitItem
          icon-color="gray"
          icon="money-transfer-icon"
          title="Prevent chargebacks"
        >
          Convert interactions and conduct transaction risk checks
        </BenefitItem>
        <BenefitItem
          icon-color="gray"
          icon="bell-icon"
          title="Fully managed & hands-off"
        >
          Reduce time tracking down unpaid invoices and payment status
        </BenefitItem>
        <BenefitItem
          icon-color="gray"
          icon="money-document-icon"
          title="Automatic volume pricing"
        >
          Adaptive pricing with no long-term commitments
        </BenefitItem>
        <BenefitItem
          icon-color="gray"
          icon="settings-icon"
          title="Fully integrated"
        >
          Generate real-time payment links and QR codes quickly and easily
        </BenefitItem>
      </div>
      <div class="flex flex-col md:flex-row items-center gap-20 mb-25">
        <div class="flex-1 flex flex-col">
          <Typography size="heading-5" class="mb-10">Prevention</Typography>
          <Typography size="heading-3" weight="medium" class="mb-20">
            Automate Chargeback Recovery
          </Typography>
          <Typography class="text-primary-400">
            Streamline the dispute process with intelligent, hands-off
            representment.
          </Typography>
        </div>
        <div class="flex-1 max-w-full md:max-w-1/2">
          <NuxtImg
            :src="`/img/chargeback_feature_2.png`"
            alt="explanation of checkout process"
            class="w-full"
            loading="lazy"
            format="png"
          />
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20 mb-blocks-gap">
        <BenefitItem
          icon-color="gray"
          icon="money-transfer-icon"
          title="Efficient resolution"
        >
          Auto-generate evidence packs to maximize win rates
        </BenefitItem>
        <BenefitItem
          icon-color="gray"
          icon="stairs-icon"
          title="Increase win rates"
        >
          Reduce resolution time and manual workload
        </BenefitItem>
        <BenefitItem
          icon-color="gray"
          icon="money-document-icon"
          title="Cost savings"
        >
          Lower operational costs through automation
        </BenefitItem>
      </div>
      <Typography size="heading-3" weight="medium" class="mb-20">
        Alerts Methods
      </Typography>
      <div class="flex flex-col md:flex-row items-center gap-20 mb-25">
        <div
          class="flex justify-center items-end flex-1 max-w-full md:max-w-1/2 max-md:min-w-full aspect-square rounded-app-big bg-[#f4f1ef] overflow-hidden relative"
        >
          <Typography
            size="body-large"
            class="absolute top-20 left-1/2 -translate-x-1/2"
          >
            Email Alert
          </Typography>
          <NuxtImg
            :src="`/img/chargeback_email.png`"
            alt="explanation of checkout process"
            class="w-[77%]"
            loading="lazy"
            format="png"
          />
        </div>
        <div
          class="flex justify-end items-end flex-1 max-w-full md:max-w-1/2 max-md:min-w-full aspect-square rounded-app-big bg-[#f4f1ef] overflow-hidden relative"
        >
          <Typography
            size="body-large"
            class="absolute top-20 left-1/2 -translate-x-1/2"
          >
            API or Webhook
          </Typography>
          <NuxtImg
            :src="`/img/home_checkout_2.png`"
            alt="explanation of checkout process"
            class="w-full"
            loading="lazy"
            format="png"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import Slider from '~/components/Chargeback/Slider.vue'
import BenefitItem from '~/components/Home/BenefitsSection/BenefitItem.vue'
</script>
