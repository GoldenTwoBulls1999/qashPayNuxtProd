<template>
  <section
    class="w-full pt-60 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center @container/main"
  >
    <div class="w-full max-h-fit flex flex-col">
      <Typography size="heading-1" class="text-center mb-19">
        Checkout Guides
      </Typography>
      <Typography class="text-center max-w-[648px] mx-auto mb-42">
        Make sure your website's checkout process aligns with Card Scheme
        requirements. A seamless, compliant checkout not only enhances the
        customer experience but also helps minimize chargebacks.
      </Typography>
      <NuxtImg
        preload
        :src="`/img/checkout_guides.png`"
        alt="explanation of checkout process"
        class="w-full"
        format="webp"
      />
    </div>
  </section>
</template>

<script setup lang="ts"></script>
