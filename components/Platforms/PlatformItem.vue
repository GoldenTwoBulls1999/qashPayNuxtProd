<template>
  <div class="flex flex-col gap-5 cursor-pointer" @click="handleClick">
    <div
        class="relative border-1 border-primary-200 rounded-app-big h-85 max-h-85 flex items-center justify-center"
        :class="{'shadow-sm': !label || (label && label !== 'coming-soon')}"
    >
      <template v-if="label">
        <div
          class="absolute top-0 right-0 mr-[28px] text-white text-sm rounded-br rounded-bl h-[28px] w-[87px] flex items-center justify-center text-[12px] font-medium"
          :class="{
            'bg-pink-500': label === 'on-demand',
            'bg-gray-400': label === 'coming-soon'
          }">
          {{ label === 'on-demand' ? 'On-Demand' : 'Coming Soon' }}
        </div>
      </template>
      <NuxtImg :src="`/img/${image}.png`" :alt="imageTitle"
        class="max-h-[60px] w-auto object-contain max-w-[172px] h-[60px]" :class="{
          'max-h-[80px] h-[80px]': title === 'SFCC',
        }" loading="lazy" format="webp" />
    </div>
    <Typography class="text-center text-primary-200">{{ title }}</Typography>
  </div>
</template>

<script setup lang="ts">
interface PlatformItemProps {
  title: string
  image: string
  to: string
  imageTitle: string
  label?: 'on-demand' | 'coming-soon'
}

const props = defineProps<PlatformItemProps>()

const handleClick = () => {
  navigateTo(props.to)
}
</script>

<style scoped></style>
