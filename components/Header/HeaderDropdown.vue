<template>
  <div ref="dropdownRef" class="relative">
    <button
      class="flex items-center gap-3 cursor-pointer hover:text-secondary-500 transition-all duration-200 relative"
      :class="{ 'active': isActive }"
      @click="toggleMenu(item.label)"
    >
      <Typography v-if="!!item.items" weight="medium">
        {{ item.label }}
      </Typography>
      <Icon
        v-if="!!item.items"
        mode="svg"
        width="8"
        height="4"
        name="app-icon:arrow-down"
        class="transition-all duration-200"
        :class="{ 'rotate-180': menuOpen }"
      />
      <NuxtLink v-if="item.link" :to="item.link" @click="toggleDropdown" :class="{ 'active': isActive }">
        <Typography weight="medium">{{ item.label }}</Typography>
      </NuxtLink>
    </button>
    <div
      v-show="
        (prevOpenMenu === item.label && !!item.items) ||
        (menuOpen && !!item.items)
      "
      class="md:absolute md:bg-white md:z-50 md:flex md:-left-15 md:border-1 md:border-gray-border md:mt-[25px] md:w-286 md:rounded-[10px] overflow-hidden"
    >
      <ul id="header-menu" class="md:p-8 md:flex-1 max-h-full">
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
            :class="{ 'active': isSubItemActive(menuItem) }"
            @click="onItemClick"
            :target="menuItem.newTab ? '_blank' : null"
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
import { ref, watch, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { onClickOutside } from '@vueuse/core'
import type { HeaderItem } from '~/utils/headerItems'

interface HeaderDropdownProps {
  item: HeaderItem
  dropDownOpen?: boolean
  toggleDropdown?: () => void
  isActive?: boolean
  shouldExpand?: boolean
}

const props = withDefaults(defineProps<HeaderDropdownProps>(), {
  isActive: false,
  shouldExpand: false
})

const route = useRoute()
const menuOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)

const prevOpenMenu = useState('prevOpen', () => '')

onMounted(() => {
  if (props.shouldExpand && 'items' in props.item) {
    menuOpen.value = true
    prevOpenMenu.value = props.item.label
  }
})

onClickOutside(dropdownRef, () => {
  menuOpen.value = false
  prevOpenMenu.value = ''
})

watch(
  () => props.dropDownOpen,
  (newVal) => {
    if (props.dropDownOpen && !newVal) menuOpen.value = false
  }
)

const toggleMenu = (label: string) => {
  menuOpen.value = !menuOpen.value
  prevOpenMenu.value = label
}

const onItemClick = () => {
  if (props.toggleDropdown) props.toggleDropdown()
  menuOpen.value = false
  prevOpenMenu.value = ''
}

const isSubItemActive = (subItem: { link: string }) => {
  return route.path === subItem.link
}
</script>

<style scoped>
a.active {
  color: #FF52A8;
}

@media (max-width: 768px) {
  .active {
    font-weight: 600;
  }
}
</style>
