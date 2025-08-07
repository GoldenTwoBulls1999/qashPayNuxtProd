<template>
  <div class="w-full flex gap-18 items-start">
    <div class="md:flex md:flex-col md:justify-between">
      <Typography
        size="heading-2"
        weight="medium"
        class="mb-app-default md:mb-40"
      >
        <span class="font-light">Go live in</span>
        <br />
        3 simple steps
      </Typography>
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
              :class="{'text-text-gray': !isOpen(index)}"
            >
              {{ formatIndex(index + 1) }}
            </Typography>
            <Typography size="heading-6" class="leading-100" :class="{'text-text-gray': !isOpen(index)}">
              {{ item.title }}
            </Typography>
          </button>
          <Transition
            name="accordion"
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:before-leave="beforeLeave"
            v-on:leave="leave"
          >
            <div v-show="isOpen(index)">
              <Typography
                size="body-normal"
                class="text-text-gray pt-8 pb-12 md:pb-15 pl-20"
              >
                {{ item.content }}
              </Typography>
              <div
                class="w-full rounded-xl"
                :class="'background-' + items[activeIndex].index"
              >
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
      <div class="mt-29">
        <AppButton to="/quote-request" class="max-md:w-full" color="black">
          Get your instant quote
        </AppButton>
      </div>
    </div>

    <div
      class="hidden w-full md:flex justify-end items-center min-w-1/2 min-[875px]:min-w-[488px] rounded-xl"
      :class="'background-' + items[activeIndex].index"
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
          class="w-full max-w-[488px] block rounded-[20px]"
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
.font-feature {
  font-feature-settings: 'zero' on;
}

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

.background-0 {
  background-color: var(--color-simple-step-1);
}

.background-1 {
  background-color: var(--color-simple-step-2);
}

.background-2 {
  background-color: var(--color-simple-step-3);
}
</style>
