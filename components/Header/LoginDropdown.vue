<template>
  <div ref="dropdownContainerRef" class="relative">
    <AppButton
      variant="outline"
      size="smallrounded6"
      class="max-md:w-full"
      @click="toggle"
    >
      Log In
    </AppButton>
    <div
      v-show="menuOpen && !!item.items"
      ref="dropdownRef"
      class="md:absolute md:bg-white md:z-50 md:flex md:-left-15 md:border-1 md:border-gray-border md:mt-[18px] md:w-286 md:h-fit md:rounded-[10px] overflow-hidden"
      :style="computedStyle"
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
            target="_blank"
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
const dropdownContainerRef = ref<HTMLElement | null>(null)
const dropdownRef = ref<HTMLElement | null>(null)
const offset = ref(0)

const computedStyle = computed(() => ({
  right: '0px',
  transform: `translateX(-${offset.value}px)`,
}))

onClickOutside(dropdownContainerRef, () => {
  menuOpen.value = false
})

watch(
  () => props.dropDownOpen,
  (newVal) => {
    if (props.dropDownOpen && !newVal) menuOpen.value = false
  }
)

const updateOffset = () => {
  if (!menuOpen.value || !dropdownRef.value) return

  const rect = dropdownRef.value.getBoundingClientRect()
  const overflow = rect.right > window.innerWidth

  offset.value = overflow ? rect.right - window.innerWidth + 8 : 0
}

const toggle = async () => {
  menuOpen.value = !menuOpen.value

  if (menuOpen.value) {
    offset.value = 0
    await nextTick()
    requestAnimationFrame(updateOffset)
  }
}

const onResize = () => {
  updateOffset()
}

onMounted(() => {
  window.addEventListener('resize', onResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', onResize)
})

const onItemClick = () => {
  if (props.toggleDropdown) props.toggleDropdown()
  menuOpen.value = false
}
</script>
