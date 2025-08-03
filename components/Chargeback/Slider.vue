<template>
  <ClientOnly>
    <swiper-container
      :loop="true"
      :slides-per-view="1"
      class="max-w-full max-h-fit"
      :autoplay="{
        delay: 4000,
        disableOnInteraction: false,
      }"
      :pagination="{
        clickable: true,
      }"
    >
      <swiper-slide class="mb-10">
        <NuxtImg
          preload
          :src="`/img/chargeback_slider_1.png`"
          alt="explanation of checkout process"
          class="w-full"
          format="png"
        />
      </swiper-slide>
      <swiper-slide class="mb-10">
        <NuxtImg
          preload
          :src="`/img/chargeback_slider_2.png`"
          alt="explanation of checkout process"
          class="w-full"
          format="png"
        />
      </swiper-slide>
    </swiper-container>
    <div class="swiper-custom-pagination mt-6 flex justify-center"></div>
  </ClientOnly>
</template>

<style>
swiper-container::part(bullet) {
  background-color: var(--color-map-primary-light);
  height: 10px;
  width: 10px;
  opacity: 1;
}

swiper-container::part(bullet-active) {
  background-color: var(--color-secondary-500);
  height: 10px;
  width: 10px;
  opacity: 1;
}
</style>
<script setup lang="ts"></script>
