<template>
  <div class="flex flex-col">
    <div class="max-h-[82px] w-auto object-contain max-w-[93px] h-[82px] mb-10">
      <NuxtImg
        :src="`/img/payment_gateway_${item.image}.png`"
        alt="item.imageAlt"
        class="h-full"
        loading="lazy"
        format="webp"
      />
    </div>
    <Typography
      size="body-large"
      weight="medium"
      class=" text-[20px] max-md:text-mobile-body-large mb-10"
    >
      {{ item.title }}
    </Typography>
    <Typography class="flex-1 text-[15px] max-md:text-mobile-body-normal mb-10">
      {{ item.description }}
    </Typography>
    <NuxtLink v-show="item.withLink" to="#" class="text-left text-secondary-500 text-[15px]">
      Find out more information
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
interface FeatureItem {
  image: string
  title: string
  description: string
  withLink?: boolean
}
defineProps<{ item: FeatureItem }>()
</script>

<style scoped></style>
