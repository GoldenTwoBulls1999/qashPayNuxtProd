<template>
  <div class="flex flex-col md:flex-row gap-5 md:gap-30">
    <div class="flex-1 max-md:p-10">
      <NuxtImg
        preload
        src="/img/payment_gateway_tab_1.png"
        alt="item.imageAlt"
        class="w-full"
        format="webp"
      />
    </div>
    <div class="flex-1 flex flex-col justify-center items-start max-md:p-10">
      <Typography class="max-md:text-mobile-body-normal">
        Connect to top eCommerce platforms and access advanced payment and
        AI-powered fraud protection through QashPay.
      </Typography>
      <ul class="list-[square] pl-15">
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Simplify your tech stack
          </Typography>
        </li>
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Boost sales conversions
          </Typography>
        </li>
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Improve the checkout experience
          </Typography>
        </li>
      </ul>
      <AppButton
        variant="text"
        :underline="false"
        class="mt-20 text-left text-secondary-500 !font-medium"
      >
        Learn more about Plugins
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
