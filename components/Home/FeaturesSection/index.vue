<template>
  <section class="w-full pb-100">
    <div
      class="flex flex-col gap-10 md:items-center"
      style="margin-bottom: calc(var(--blocks-gap) / 2)"
    >
      <Typography size="heading-2">Win more customers</Typography>
      <Typography size="heading-5">
        By letting them pay their way &ndash; wherever they are
      </Typography>
    </div>
    <div class="flex flex-col gap-100">
      <div
        class="flex flex-col gap-12 md:flex-row-reverse md:gap-50 md:items-center"
      >
        <div class="w-full relative md:max-w-[488px]">
          <NuxtImg
            src="/img/home_features_1.png"
            alt="Girl with phone"
            class="w-full rounded-[20px]"
            loading="lazy"
            format="png"
          />
          <div
            class="bg-white absolute z-20 inset-x-0 bottom-0 mx-16 rounded-[20px] px-11 py-6 flex justify-between items-center -translate-y-[47px]"
          >
            <Typography size="heading-6">{{
              formatBalance(400, 'EUR')
            }}</Typography>
            <div class="rounded-full px-6 py-2 bg-[#DFDEFF]">
              <Typography size="body-normal">€ EUR</Typography>
            </div>
          </div>
        </div>
        <div class="flex flex-col gap-12 w-full">
          <Icon mode="svg" name="app-icon:money-icon" width="38" height="25" />
          <Typography size="heading-4">
            Local currencies,
            <br />
            local cards
          </Typography>
          <Typography size="body-large" class="text-text-gray md:max-w-[360px]">
            Make it easy for customers to pay in their own currency, for
            smoother checkouts and fewer drop-offs.
          </Typography>
        </div>
      </div>
      <div class="flex flex-col gap-12 md:flex-row md:gap-50 md:items-center">
        <div class="w-full relative md:max-w-[488px]">
          <img
            src="/img/home_features_2.png"
            alt="globe animation"
            class="w-full rounded-[20px]"
            loading="lazy"
          />
        </div>
        <div class="flex flex-col gap-12 w-full">
          <Icon mode="svg" name="app-icon:globe-icon" width="29" height="29" />
          <Typography size="heading-4">
            Trusted local payment methods
          </Typography>
          <Typography size="body-large" class="text-text-gray md:max-w-[360px]">
            Make it easy for customers to pay in their own currency, for
            smoother checkouts and fewer drop-offs.
          </Typography>
          <AppButton
            :to="{ path: '/merchant-account', hash: '#world_map' }"
            variant="text"
          >
            Learn more
          </AppButton>
        </div>
      </div>
      <FeaturesAccordion :items="accordionItems" />
    </div>
  </section>
</template>

<script setup lang="ts">
import FeaturesAccordion from '~/components/Home/FeaturesSection/FeaturesAccordion.vue'
import { formatBalance } from '~/utils/formatBalance'
import { accordionItems } from '~/utils/featuresAccordionItems'
</script>
