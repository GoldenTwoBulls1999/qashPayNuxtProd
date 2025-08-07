<template>
  <div
    class="mb-10 p-12 pt-13 md:p-16 md:pt-18 flex flex-col border-1 rounded-app-big border-primary-200 shadow-benefit @container/testimonial"
    :class="isExpanded ? 'max-h-fit' : 'max-h-[370px]'"
  >
    <div
      class="flex max-[500px]:flex-col max-md:flex-wrap md:flex-col @min-[327px]/testimonial:!flex-row gap-y-5 items-start justify-between mb-20"
    >
      <div class="max-md:max-w-[calc(100%-115px)]">
        <Typography
          size="body-large"
          weight="medium"
          class="max-md:text-mobile-body-large"
        >
          {{ item.author }},
        </Typography>
        <Typography
          size="body-large"
          class="leading-[1] mt-3 min-h-[38px] max-md:text-mobile-body-large"
        >
          {{ item.authorPosition }}
        </Typography>
      </div>
      <NuxtImg
        :src="`/img/${item.logo}.png`"
        class="max-md:max-w-[115px] max-w-70"
        loading="lazy"
        quality="100"
        format="png"
      />
    </div>
    <div class="flex-1 overflow-hidden relative">
      <Typography
        v-for="(text, index) in item.description"
        :key="index"
        size="body-large"
        class="mb-10 max-md:text-mobile-body-normal"
      >
        {{ text }}
      </Typography>
      <div
        v-show="!isExpanded"
        class="absolute bottom-0 h-[75px] w-full bg-linear-177 from-white/0 from-1% to-white/100 to-98%"
      />
    </div>
    <AppButton
      id="become-partner"
      variant="text"
      :underline="false"
      class="uppercase text-secondary-500 text-body-normal max-w-fit mt-15"
      @click="isExpanded = !isExpanded"
    >
      {{ isExpanded ? 'Hide' : 'Show full review' }}
    </AppButton>
  </div>
</template>

<script setup lang="ts">
interface TestimonialsItem {
  author: string
  authorPosition: string
  logo: string
  description: string[]
}

interface TestimonialsItemProps {
  item: TestimonialsItem
}

defineProps<TestimonialsItemProps>()

const isExpanded = ref(false)
</script>

<style scoped></style>
