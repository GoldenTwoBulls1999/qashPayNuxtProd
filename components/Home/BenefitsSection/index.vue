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
        We provide data-driven pricing, such as insurance underwriting. Should
        anything happen to your business, the Acquiring Bank is also liable
      </BenefitItem>
      <BenefitItem icon="card-lock-icon" title="Best-in-class onboarding">
        We provide data-driven pricing, such as insurance underwriting. Should
        anything happen to your business, the Acquiring Bank is also liable
      </BenefitItem>
      <BenefitItem icon="pie-chart-icon" title="Real human support">
        We provide data-driven pricing, such as insurance underwriting. Should
        anything happen to your business, the Acquiring Bank is also liable
      </BenefitItem>
    </div>
  </section>
</template>

<script setup lang="ts">
import BenefitItem from '~/components/Home/BenefitsSection/BenefitItem.vue'
</script>
