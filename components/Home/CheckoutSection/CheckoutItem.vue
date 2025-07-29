<template>
  <div
    class="checkout-item bg-white flex flex-col gap-16 md:border-1 md:border-[#CACAD4] md:rounded-app-big md:flex-row md:pl-24 md:pt-16 md:pr-16 md:pb-27"
  >
    <div class="flex flex-col gap-12 md:mt-16">
      <div
        class="w-[54px] h-[54px] min-w-[54px] min-h-[54px] p-4 rounded-[10px] bg-[#eeeeee] flex items-center justify-center"
      >
        <Icon name="app-icon:card-lock-icon" />
      </div>
      <div class="flex flex-col gap-8">
        <Typography size="heading-5">{{ item.title }}</Typography>
        <Typography class="text-text-gray">
          <slot />
        </Typography>
      </div>
    </div>
    <div
      class="w-full aspect-square min-w-1/2 min-[900px]:min-w-[488px] rounded-[10px] bg-[#f4f1ef] overflow-hidden relative"
    >
      <NuxtImg
        :src="`/img/${item.image}.png`"
        :alt="item.imageAlt"
        class="w-full absolute bottom-0 right-0"
        loading="lazy"
        format="webp"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  item: {
    title: string
    image: string
    imageAlt: string
  }
  index: number
}

defineProps<Props>()
</script>
