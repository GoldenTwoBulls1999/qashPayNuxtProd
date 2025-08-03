<template>
  <div class="flex flex-col md:flex-row gap-5 md:gap-30">
    <div class="flex-1 max-md:p-10">
      <NuxtImg
        preload
        src="/img/payment_gateway_tab_3.png"
        alt="item.imageAlt"
        class="w-full"
        format="png"
      />
    </div>
    <div class="flex-1 flex flex-col justify-center items-start max-md:p-10">
      <Typography class="max-md:text-mobile-body-normal">
        Send one-click payment links or QR codes that lead customers directly to
        your hosted payment form.
      </Typography>

      <ul class="list-[square] pl-15">
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Generate and send payment requests instantly
          </Typography>
        </li>
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Maximize all payment channels
          </Typography>
        </li>
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Reach more customers with ease
          </Typography>
        </li>
      </ul>
      <AppButton
        variant="text"
        :underline="false"
        class="mt-20 text-left text-secondary-500 !font-medium"
      >
        Learn more about Pay by Link
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
