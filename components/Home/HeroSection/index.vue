<template>
  <section class="w-full pb-blocks-gap @container/main">
    <div class="flex md:-mr-10 @min-[992px]/main:-mr-[calc((100vw-992px)/2)]">
      <div
        class="flex flex-col md:justify-center min-[1300px]:max-w-[calc(992px/2)]"
      >
        <div class="mt-24">
          <div class="bg-secondary-300 max-w-fit px-4.5 py-3 rounded-sm mb-8">
            <Typography weight="medium" size="inline-label">
              Simple online payments
            </Typography>
          </div>
          <Typography
            weight="medium"
            size="heading-1"
            class="text-left tracking-tighter"
          >
            <span class="font-light">Start accepting</span> online payments
            today
          </Typography>
        </div>
        <div class="mt-12 -mr-10 block md:hidden">
          <div class="w-full relative">
            <NuxtImg
              preload
              src="/img/home_hero_desktop.png"
              alt="Qashpay payment on desktop"
              class="drop-shadow-[0px_4px_14px_rgba(10,10,10,0.14)]"
              format="png"
            />
            <NuxtImg
              preload
              src="/img/home_hero_phone_with_icon.png"
              alt="Qashpay payment on phone"
              class="absolute h-[80%] bottom-0 left-[17%] drop-shadow-[0px_4px_14px_rgba(10,10,10,0.14)]"
              format="png"
            />
          </div>
        </div>
        <div class="mt-35 md:mt-16">
          <div class="flex flex-col md:flex-row gap-10">
            <AppButton
              class="w-full md:w-fit"
              to="/quote-request"
              color="black"
            >
              Get your instant quote
            </AppButton>
            <AppButton color="pink" @click="isVideoOpen = true">
              Preview
            </AppButton>
            <Popup :open="isVideoOpen" :handleClose="handleVideoClose" />
          </div>
          <div
            class="flex justify-between mt-15 min-[350px]:justify-center min-[350px]:gap-x-9 max-[425px]:-mx-[calc((100vw-(100vw-40px))/2-5px)] md:mx-0 md:justify-start @container/features"
          >
            <HeroFeatureItem>Choice of checkouts</HeroFeatureItem>
            <HeroFeatureItem>Human support</HeroFeatureItem>
            <HeroFeatureItem>Secure PCI-1</HeroFeatureItem>
          </div>
        </div>
      </div>
      <div class="mt-12 hidden md:block w-full 2xl:max-w-1/2">
        <div class="w-full ml-auto max-w-[783px] relative">
          <NuxtImg
            preload
            src="/img/home_hero_desktop.png"
            alt="Qashpay payment on desktop"
            class="drop-shadow-[0px_4px_14px_rgba(10,10,10,0.14)]"
            format="png"
          />
          <NuxtImg
            preload
            src="/img/home_hero_phone_with_icon.png"
            alt="Qashpay payment on phone"
            class="absolute h-[90%] bottom-[-40px] left-[15%] drop-shadow-[0px_4px_14px_rgba(10,10,10,0.14)]"
            format="png"
          />
        </div>
      </div>
    </div>
    <div
      class="relative mt-(--block-top-margin) @max-[992px]/main:-mx-10 @min-[992px]/main:-mx-[calc((100vw-992px)/2)] h-fit"
    >
      <Slider />
    </div>
  </section>
</template>

<script setup lang="ts">
import HeroFeatureItem from '~/components/Home/HeroSection/HeroFeatureItem.vue'
import Slider from '~/components/Home/HeroSection/Slider.vue'
import { useScrollLock } from '@vueuse/core'

const isVideoOpen = ref(false)

const handleVideoClose = () => (isVideoOpen.value = false)

onMounted(() => {
  const scrollLock = useScrollLock(document.body)

  watch(
    isVideoOpen,
    (val) => {
      scrollLock.value = val
    },
    { immediate: true }
  )
})
</script>
