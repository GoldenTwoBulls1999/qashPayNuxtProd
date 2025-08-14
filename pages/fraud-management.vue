<template>
  <section
    class="w-full pt-25 md:pt-first-top-gap pb-blocks-gap @container/main"
  >
    <div class="w-full max-h-fit flex flex-col">
      <div
        class="pb-blocks-gap flex flex-col-reverse md:flex-row gap-60 md:gap-80 justify-between"
      >
        <div class="flex-1 flex flex-col">
          <Typography
            size="heading-2"
            class="max-md:text-center max-md:text-mobile-heading-2 mb-20"
          >
            Built for Real-time, Precise, and Actionable Paymants Intelligence
          </Typography>
          <Typography
            size="heading-5"
            class="max-md:text-center max-md:text-mobile-heading-6 text-primary-400 md:max-w-200 mb-25"
          >
            A cutting-edge platform built to empower decision-making and
            transparency
          </Typography>
        </div>
        <div
          class="flex-1 flex flex-col justify-between relative mr-0 min-[1300px]:-mr-60"
        >
          <NuxtImg
            preload
            :src="`/img/froud_management_hero.png`"
            class="w-full z-10"
            alt="item.imageAlt"
          />
          <div
            class="absolute inset-x-0 -bottom-1/2 md:bottom-0 h-[75%] bg-radial bg-radial-[ellipse_52.86%_52.86%_at_50%_100%] from-[#c8c6f066] to-white"
          />
        </div>
      </div>

      <div class="flex flex-col gap-40">
        <div class="flex flex-col gap-12 md:flex-row md:gap-20 md:items-center">
          <div
            class="w-full rounded-app-big overflow-hidden relative md:flex-1 md:max-w-[476px]"
          >
            <NuxtImg
              src="/img/froud_management_feature_1.png"
              alt="Exmaple of the application's work"
              class="w-full"
              loading="lazy"
              format="png"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[476px] px-0 md:px-20">
            <Typography size="heading-4">
              Reduce the Total Cost of Fraud Management
            </Typography>
            <Typography size="body-large" class="text-text-gray">
              A robust and resilient payments orchestration platform on one API
              integration that offers comprehensive risk strategy management,
              accurate insights, transparent trends and threats.
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
              format="png"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[476px] px-0 md:px-20">
            <Typography size="heading-4">Precession</Typography>
            <Typography size="body-large" class="text-text-gray">
              Achieve real-time, revenue-optimized decisions with QashPay’s
              incremental machine learning models that adapt instantly to
              evolving threats and focus on identifying trusted transactions,
              not just blocking fraud.
            </Typography>
          </div>
        </div>
        <div class="flex flex-col gap-12 md:flex-row md:gap-20 md:items-center">
          <div
            class="w-full relative rounded-app-big overflow-hidden md:flex-1 md:max-w-[476px]"
          >
            <NuxtImg
              src="/img/froud_management_feature_3.png"
              alt="Exmaple of the application's work"
              class="w-full"
              loading="lazy"
              format="png"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[476px] px-0 md:px-20">
            <Typography size="heading-4">Transparency</Typography>
            <Typography size="body-large" class="text-text-gray">
              Gain full visibility into risk strategy performance with accurate
              insights, clear threat trends, and transparent reporting — all
              through a single, powerful API integration that enables
              contextualized, multilayered fraud decisioning.
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
          2025 QashPay Global Performance Results vs Market Average&ast;
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
                  1.9&percnt;
                </Typography>
                <Typography class="text-white">QashPay</Typography>
              </div>
              <div class="flex flex-col items-center">
                <Typography
                  size="heading-3"
                  weight="medium"
                  class="text-white mb-6 p-5"
                >
                  5.8&percnt;
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
                  0.3&percnt;
                </Typography>
                <Typography class="text-white">QashPay</Typography>
              </div>
              <div class="flex flex-col items-center">
                <Typography
                  size="heading-3"
                  weight="medium"
                  class="text-white mb-6 p-5"
                >
                  2.3&percnt;
                </Typography>
                <Typography class="text-white">Market Average</Typography>
              </div>
            </div>
          </div>
        </div>
        <Typography weight="light" class="text-primary-100">
          &ast;2025 MRC Global Payments and Fraud Report
        </Typography>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
