<template>
  <section
    class="w-full pt-60 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center"
  >
    <div class="w-full max-h-fit flex flex-col">
      <div class="w-full flex justify-center items-center h-[84px] mb-20">
        <Icon mode="svg" width="84" height="84" name="app-icon:shield-icon" />
      </div>
      <Typography size="heading-2" class="text-center mb-20">
        Built for Real-time, Precise, and Actionable Paymants Intelligence
      </Typography>
      <Typography size="heading-5" class="text-center">
        A cutting-edge platform built to empower decision-making and
        transparency
      </Typography>
      <div class="flex flex-col gap-40 mt-60">
        <div class="flex flex-col gap-12 md:flex-row md:gap-20 md:items-center">
          <div
            class="w-full rounded-app-big overflow-hidden relative md:flex-1 md:max-w-[476px]"
          >
            <NuxtImg
              src="/img/froud_management_feature_1.png"
              alt="Exmaple of the application's work"
              class="w-full"
              loading="lazy"
              format="webp"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[476px]">
            <Typography size="heading-4">
              Reduce the Total Cost of Fraud Management
            </Typography>
            <Typography size="body-large" class="text-text-gray">
              A robust and resilient payments orchestration platform on one API
              integration that offers comprehensive risk strategy management,
              accurate insights, transparent trends and threats,
            </Typography>
          </div>
        </div>
        <div
          class="flex flex-col gap-12 md:flex-row-reverse md:gap-20 md:items-center"
        >
          <div
            class="w-full rounded-app-big overflow-hidden relative md:flex-1 md:max-w-[476px]"
          >
            <NuxtImg
              src="/img/froud_management_feature_2.png"
              alt="Exmaple of the application's work"
              class="w-full"
              loading="lazy"
              format="webp"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[476px]">
            <Typography size="heading-4">Precession</Typography>
            <Typography size="body-large" class="text-text-gray">
              A robust and resilient payments orchestration platform on one API
              integration that offers comprehensive risk strategy management,
              accurate insights, transparent trends and threats,
            </Typography>
          </div>
        </div>
        <div class="flex flex-col gap-12 md:flex-row md:gap-50 md:items-center">
          <div
            class="w-full relative rounded-app-big overflow-hidden md:flex-1 md:max-w-[476px]"
          >
            <NuxtImg
              src="/img/froud_management_feature_3.png"
              alt="Exmaple of the application's work"
              class="w-full"
              loading="lazy"
              format="webp"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[476px]">
            <Typography size="heading-4">Transparency</Typography>
            <Typography size="body-large" class="text-text-gray">
              A robust and resilient payments orchestration platform on one API
              integration that offers comprehensive risk strategy management,
              accurate insights, transparent trends and threats,
            </Typography>
          </div>
        </div>
      </div>
      <div
        class="mt-40 py-24 px-8 flex flex-col items-center rounded-app-big bg-linear-to-b from-gradient-blue to-gradient-purple"
      >
        <Typography size="heading-6" weight="light" class="text-white mb-5">
          Revenue
        </Typography>
        <Typography
          size="heading-5"
          weight="medium"
          class="text-white text-center mb-30"
        >
          2024 QashPay Global Performance Results vs Market Average&ast;
        </Typography>
        <div class="flex flex-wrap items-center gap-40 mb-10">
          <div
            class="w-full md:w-[305px] flex flex-col items-center rounded-app-big bg-primary-500/20 pt-15 pb-12"
          >
            <Typography
              size="heading-6"
              weight="light"
              class="text-white mb-15"
            >
              Deny Rates
            </Typography>
            <div class="flex items-center gap-10 mb-6">
              <div class="flex flex-col items-center">
                <Typography
                  size="heading-3"
                  weight="medium"
                  class="text-white rounded-lg bg-secondary-500 mb-6 p-5"
                >
                  1,9&percnt;
                </Typography>
                <Typography class="text-white">QashPay</Typography>
              </div>
              <div class="flex flex-col items-center">
                <Typography
                  size="heading-3"
                  weight="medium"
                  class="text-white mb-6 p-5"
                >
                  5,8&percnt;
                </Typography>
                <Typography class="text-white">Market Average</Typography>
              </div>
            </div>
          </div>
          <div
            class="w-full md:w-[305px] flex flex-col items-center rounded-app-big bg-primary-500/20 pt-15 pb-12"
          >
            <Typography
              size="heading-6"
              weight="light"
              class="text-white mb-15"
            >
              Revenue Lost
            </Typography>
            <div class="flex items-center gap-10">
              <div class="flex flex-col items-center">
                <Typography
                  size="heading-3"
                  weight="medium"
                  class="text-white rounded-lg bg-secondary-500 mb-6 p-5"
                >
                  0,3&percnt;
                </Typography>
                <Typography class="text-white">QashPay</Typography>
              </div>
              <div class="flex flex-col items-center">
                <Typography
                  size="heading-3"
                  weight="medium"
                  class="text-white mb-6 p-5"
                >
                  2,3&percnt;
                </Typography>
                <Typography class="text-white">Market Average</Typography>
              </div>
            </div>
          </div>
        </div>
        <Typography weight="light" class="text-primary-100">
          &ast;2024 MRC Global Payments and Fraud Report
        </Typography>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
