<template>
  <button class="md:hidden" @click="toggleDropdown">
    <Typography weight="medium">Menu</Typography>
  </button>
  <Transition name="slide-fade">
    <div
      v-if="dropDownOpen"
      class="md:hidden fixed top-[63px] border-t-1 border-border-gray inset-x-0 w-full bg-white h-[calc(100vh-63px)] p-10 z-50 transition-all duration-200"
    >
      <ul class="flex flex-col gap-8">
        <li>
          <div class="w-full flex flex-col-reverse gap-12">
            <template v-for="item in loginItems" :key="item.label">
              <LoginDropdown :item="item" />
            </template>
            <AppButton
              size="small"
              class="w-full"
              color="black"
              to="/quote-request"
            >Sign Up</AppButton
            >
          </div>
        </li>
        <li
          v-for="(item, index) in headerItems"
          :key="item.label"
          :class="{ 'mt-12': index === 0 }"
        >
          <HeaderDropdown
            :item="item"
            :drop-down-open="dropDownOpen"
            :toggle-dropdown="toggleDropdown"
            :is-active="isItemActive(item)"
            :should-expand="shouldExpandItem(item)"
          />
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import { headerItems, type HeaderItem } from '~/utils/headerItems'
import LoginDropdown from '~/components/Header/LoginDropdown.vue'
import { loginItems } from '~/utils/loginItems'

const route = useRoute()
const dropDownOpen = ref(false)

const currentPath = computed(() => route.path)

const toggleDropdown = () => {
  dropDownOpen.value = !dropDownOpen.value

  if (dropDownOpen.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
}

const isItemActive = (item: HeaderItem): boolean => {
  if ('link' in item && item.link) {
    return currentPath.value === item.link
  }

  if ('items' in item && item.items) {
    return item.items.some(subItem => currentPath.value === subItem.link)
  }

  return false
}

const shouldExpandItem = (item: HeaderItem): boolean => {
  if ('items' in item && item.items) {
    return item.items.some(subItem => currentPath.value === subItem.link)
  }

  return false
}
</script>

<style>
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(100%);
}
</style>
