<template>
  <div class="flex flex-col md:flex-row gap-5 md:gap-30">
    <div class="flex-1 max-md:p-10">
      <NuxtImg
        preload
        src="/img/payment_gateway_tab_2.png"
        alt="item.imageAlt"
        class="w-full"
        format="png"
      />
    </div>
    <div class="flex-1 flex flex-col justify-center items-start max-md:p-10">
      <Typography class="max-md:text-mobile-body-normal">
        Protect your customers and reduce false positives with fast, automated
        deployment of advanced machine learning and fraud detection models.
      </Typography>
      <ul class="list-[square] pl-15">
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Boost fraud detection rates by up to 22%
          </Typography>
        </li>
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Extend the accuracy and effectiveness of existing models
          </Typography>
        </li>
        <li>
          <Typography class="max-md:text-mobile-body-normal">
            Respond to fraud and behavioral changes in real time
          </Typography>
        </li>
      </ul>
      <Typography class="max-md:text-mobile-body-normal">
        QashPay helps you stay ahead of evolving threats with intelligent,
        adaptive protection.
      </Typography>
      <AppButton
        variant="text"
        :underline="false"
        class="mt-20 text-left text-secondary-500 !font-medium"
      >
        Learn more about Fraud Prevention
      </AppButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
