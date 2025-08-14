<template>
  <div
    class="relative max-[992px]:-mx-10 min-[992px]:-mx-[calc((100vw-992px)/2)] md:mb-blocks-gap"
  >
    <Typography size="heading-4" class="text-center"
      ><span class="relative"
        >Testimonials
        <span
          class="absolute bg-gray-300 text-white size-11 text-xs text-center rounded-full leading-11 top-[-0.4em] right-[-1.8em]"
          >{{ testimonials.length }}</span
        ></span
      ></Typography
    >
    <div
      ref="swiperContainer"
      class="flex justify-center max-w-full mt-20 md:px-10"
    >
      <ClientOnly>
        <button
          class="w-32 h-32 mt-75 mr-20 justify-center items-center aspect-square min-w-32 rounded-full border-1 border-primary-200 shadow-benefit"
          :class="isSmallScreen ? 'hidden' : 'flex'"
          @click="swiper.prev()"
        >
          <Icon mode="svg" width="20" name="app-icon:arrow-left-icon" />
        </button>

        <swiper-container
          ref="swiperRef"
          :class="{
            'max-w-full': isSmallScreen,
            'max-w-[calc(100%-208px)]': isLargeScreen,
            'max-w-[992px]': isExtraLargeScreen,
          }"
          :loop="true"
          :slides-per-view="isSmallScreen ? 1.15 : 2"
          :space-between="isSmallScreen ? 20 : 40"
          :centered-slides="true"
        >
          <swiper-slide
            v-for="(item, index) in testimonials"
            :key="`slide-basic-${index}`"
          >
            <TestimonialsItem :item="item" />
          </swiper-slide>
        </swiper-container>

        <button
          class="w-32 h-32 mt-75 ml-20 justify-center items-center aspect-square min-w-32 rounded-full border-1 border-primary-200 shadow-benefit"
          :class="isSmallScreen ? 'hidden' : 'flex'"
          @click="swiper.next()"
        >
          <Icon mode="svg" width="20" name="app-icon:arrow-right-icon" />
        </button>
      </ClientOnly>
    </div>
  </div>
</template>

<script setup lang="ts">
import { testimonials } from '~/utils/testimonials'
import TestimonialsItem from '~/components/Partners/TestimonialsItem.vue'
import { useMediaQuery } from '@vueuse/core'
const swiperRef = ref(null)
const swiper = useSwiper(swiperRef)

const isLargeScreen = useMediaQuery(
  '(min-width: 875px) and (max-width: 1199px)'
)
const isExtraLargeScreen = useMediaQuery('(min-width: 1200px)')
const isSmallScreen = useMediaQuery('(max-width: 874px)')
</script>

<style scoped></style>
