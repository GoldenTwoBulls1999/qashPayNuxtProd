<template>
  <div ref="dropdownRef" class="relative">
    <AppButton variant="outline" size="smallrounded6" @click="toggleMenu">
      Log In
    </AppButton>
    <div
      v-show="menuOpen && !!item.items"
      class="md:absolute md:bg-white md:z-50 md:flex md:-left-15 md:border-1 md:border-gray-border md:mt-[18px] md:w-286 md:h-fit md:rounded-[10px] overflow-hidden"
    >
      <ul
        id="header-menu"
        data-overlayscrollbars-initialize
        class="md:p-8 md:flex-1 max-h-full"
      >
        <li
          v-for="menuItem in item.items"
          :key="menuItem.label"
          role="menuitem"
          tabindex="-1"
          class="p-6 rounded-sm hover:bg-primary-100 hover:pl-10 transition-all duration-200"
        >
          <NuxtLink
            :to="menuItem.link"
            class="flex items-start gap-4"
            @click="onItemClick"
          >
            <Icon
              mode="svg"
              width="5"
              height="7"
              name="app-icon:chevron-right-icon"
              class="mt-4 min-w-[9px]"
            />
            <Typography weight="medium">{{ menuItem.label }}</Typography>
          </NuxtLink>
        </li>
      </ul>
      <div
        class="hidden md:flex flex-col max-w-126 px-[17px] pt-[19px] pb-[22px]"
        :class="item.accentColorClass"
      >
        <NuxtImg
          :src="`/img/${item.image}.png`"
          :alt="item.imageAlt"
          class="w-full mb-4 mb-7"
          format="png"
          preload
        />
        <Typography weight="medium" class="mb-4 leading-body-normal">
          {{ item.label }}
        </Typography>
        <Typography size="inline-small" class="text-gray-text">{{
          item.text
        }}</Typography>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { onClickOutside } from '@vueuse/core'
import type { HeaderItem } from '~/utils/headerItems'

interface HeaderDropdownProps {
  item: HeaderItem
  dropDownOpen?: boolean
  toggleDropdown?: () => void
}

const props = defineProps<HeaderDropdownProps>()

const menuOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

onClickOutside(dropdownRef, () => {
  menuOpen.value = false
})

watch(
  () => props.dropDownOpen,
  (newVal) => {
    if (props.dropDownOpen && !newVal) menuOpen.value = false
  }
)

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value
}

const onItemClick = () => {
  if (props.toggleDropdown) props.toggleDropdown()
  menuOpen.value = false
}
</script>
