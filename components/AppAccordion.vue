<template>
  <div class="w-full flex gap-18 items-start">
    <div class="md:flex md:flex-col md:justify-between">
      <div>
        <div
          v-for="(item, index) in items"
          :key="index"
          class="cursor-pointer"
          :class="{ 'border-b border-border-gray': index !== items.length - 1 }"
          @click="toggleItem(index)"
        >
          <button
            :aria-expanded="isOpen(index)"
            class="cursor-pointer flex items-center gap-10"
            :class="{
              'pb-12': !isOpen(index) && index !== items.length - 1,
              'pt-12': index !== 0,
            }"
          >
            <Typography
              size="body-normal"
              class="leading-100 mt-1 w-[19px]"
              :class="{ 'text-text-gray': !isOpen(index) }"
            >
              {{ formatIndex(index + 1) }}
            </Typography>
            <Typography
              size="heading-6"
              class="leading-100"
              :class="{ 'text-text-gray': !isOpen(index) }"
            >
              {{ item.title }}
            </Typography>
          </button>
          <Transition
            name="accordion"
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
          >
            <div v-show="isOpen(index)">
              <div
                size="body-normal"
                class="text-text-gray pt-8 pb-12 md:pb-15 pl-20 leading-[1.5]"
                v-html="item.content"
              />
              <AppButton
                v-show="item.to"
                variant="text"
                :underline="false"
                class="!pt-8 !pb-12 md:!pb-15 !pl-20 text-left text-secondary-500 cursor-pointer"
                :to="item.to?.link"
              >
                {{ item.to?.title }}
              </AppButton>
              <div class="w-full rounded-xl">
                <NuxtImg
                  preload
                  :src="`/img/${item.image}.png`"
                  :alt="item.imageAlt"
                  class="w-full md:hidden pt-8 pb-18"
                  format="png"
                />
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </div>

    <div
      class="hidden w-full md:flex justify-end items-center min-w-1/2 min-[875px]:min-w-[488px] rounded-xl"
    >
      <div
        v-for="(item, index) in items"
        :key="index"
        :class="activeIndex !== index ? 'hidden' : ''"
      >
        <NuxtImg
          preload
          :src="`/img/${item.image}.png`"
          :alt="item.imageAlt"
          class="w-full max-w-[488px] block"
          :class="{
            'drop-shadow-[0px_4px_14px_rgba(10,10,10,0.14)]': item.withShadow,
          }"
          format="png"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { formatIndex } from '~/utils/formatIndex'

interface AccordionItem {
  title: string
  content: string
  image: string
  imageAlt: string
  index: number
  withShadow?: boolean
  to?: {
    title: string
    link: string
  }
}

defineProps<{
  items: AccordionItem[]
}>()

const activeIndex = ref(0)

const isOpen = (index: number) => activeIndex.value === index

const toggleItem = (index: number) => {
  activeIndex.value = index
}

const beforeEnter = (el: Element) => {
  const accordionItem = el as HTMLElement
  accordionItem.style.height = '0'
}

const enter = (el: Element) => {
  const accordionItem = el as HTMLElement
  accordionItem.style.height = el.scrollHeight + 'px'
  setTimeout(() => {
    accordionItem.style.height = 'auto'
  }, 250)
}

const beforeLeave = (el: Element) => {
  const accordionItem = el as HTMLElement
  accordionItem.style.height = el.scrollHeight + 'px'
  setTimeout(() => {
    accordionItem.style.height = 'auto'
  }, 250)
}

const leave = (el: Element) => {
  const accordionItem = el as HTMLElement
  accordionItem.style.height = '0'
}
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.25s ease-out;
}

.accordion-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.accordion-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
