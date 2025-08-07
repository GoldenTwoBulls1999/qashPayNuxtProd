<template>
  <section class="w-full pb-blocks-gap">
    <Typography size="heading-3" weight="medium" class="text-center">
      <span class="font-light">Why top businesses</span> choose Qashpay
    </Typography>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-y-16 mt-24">
      <BenefitItem icon="chart-icon" title="Data-driven pricing">
        We provide data-driven pricing, such as insurance underwriting. Should
        anything happen to your business, the Acquiring Bank is also liable
      </BenefitItem>
      <BenefitItem icon="lock-icon-primary" title="Secure – PCI level 1">
        QashPay is PCI DSS Level 1 certified, ensuring the highest standard of payment security. Your customers' data is fully protected with industry-leading encryption, compliance, and secure transaction processing.
      </BenefitItem>
      <BenefitItem icon="card-lock-icon" title="Best-in-class onboarding">
        QashPay offers best-in-class onboarding with seamless integration, intuitive dashboards, rapid setup, dedicated support, and streamlined KYC—ensuring businesses go live quickly and efficiently with minimal friction.
      </BenefitItem>
      <BenefitItem icon="pie-chart-icon" title="Real human support">
        QashPay’s support is provided by real human payment experts—not AI—who understand complex payment challenges, offer personalized guidance, and ensure you get timely, expert assistance whenever needed.
      </BenefitItem>
    </div>
  </section>
</template>

<script setup lang="ts">
import BenefitItem from '~/components/Home/BenefitsSection/BenefitItem.vue'
</script>
