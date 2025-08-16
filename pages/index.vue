<template>
  <HeroSection />
  <FeaturesSection />
  <VideoSection />
  <ContactsSection />
  <BenefitsSection />
  <CheckoutSection>
    <Typography size="heading-3" weight="medium" class="text-center">
      <span class="font-light">Choose your</span> checkout method
    </Typography>
  </CheckoutSection>
  <CtaSection />
</template>

<script setup>
import HeroSection from '@/components/Home/HeroSection'
import FeaturesSection from '@/components/Home/FeaturesSection'
import ContactsSection from '~/components/Home/ContactSection'
import BenefitsSection from '~/components/Home/BenefitsSection'
import CheckoutSection from '~/components/CheckoutSection'
import CtaSection from '~/components/Home/CtaSection.vue'
import VideoSection from '~/components/Home/VideoSection'

useHead({
  title: 'QashPay'
})
</script>
