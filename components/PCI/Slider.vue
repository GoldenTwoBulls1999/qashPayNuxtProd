<template>
  <div
    class="relative max-[992px]:-mx-10 min-[992px]:-mx-[calc((100vw-992px)/2)] flex flex-col items-center"
  >
    <Typography size="heading-4" weight="medium" class="text-center mb-10">
      PCI Scanning Portal
    </Typography>
    <Typography size="body-large" class="text-center max-w-2xl text-[#5A5666]">
      Agent Portal is a real-time dashboard that provides data sets required to
      monitor at the agent, acquirer, scheme and merchant levels.
    </Typography>
    <div
      ref="swiperContainer"
      class="flex justify-center items-center w-full max-w-[818px] mt-20"
    >
      <ClientOnly>
        <button
          class="transform -translate-y-1/2 mr-20 size-20 md:size-32 bg-white rounded-full border-[#D9D9D9] border-1 shadow-sm hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors z-10 cursor-pointer"
          @click="swiper.prev()"
        >
          <Icon mode="svg" width="20" name="app-icon:arrow-left-icon" />
        </button>

        <swiper-container
          ref="swiperRef"
          class="grow-1 shrink-1 max-w-[100%] md:max-w-[calc(100%-208px)] drop-shadow-[0px_4px_14px_rgba(10,10,10,0.14)]"
          :loop="true"
          :slides-per-view="1"
          :pagination="{
            type: 'custom',
            clickable: false,
            renderCustom: function (swiper, current, total) {
              return current + ' of ' + total
            },
          }"
        >
          <swiper-slide
            class="mb-20"
            v-for="(item, index) in pciItems"
            :key="`slide-basic-${index}`"
          >
            <NuxtImg
              preload
              :src="`/img/${item.image}.png`"
              :alt="item.description"
              class="w-full"
              format="png"
            />
            <div
              class="w-full flex items-center justify-center text-center mt-15"
            >
              {{ item.description }}
            </div>
          </swiper-slide>
        </swiper-container>

        <button
          class="transform -translate-y-1/2 ml-20 size-20 md:size-32 bg-white rounded-full border-[#D9D9D9] border-1 shadow-sm hidden md:flex items-center justify-center hover:bg-gray-50 transition-colors z-10 cursor-pointer"
          @click="swiper.next()"
        >
          <Icon mode="svg" width="20" name="app-icon:arrow-right-icon" />
        </button>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { pciItems } from '~/utils/pci-items'

const swiperRef = ref(null)
const swiper = useSwiper(swiperRef)
</script>

<style scoped>
swiper-container::part(pagination) {
  color: #cccad2;
}
</style>
