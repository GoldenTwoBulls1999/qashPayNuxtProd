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
          <div class="w-full flex gap-12">
            <AppButton variant="outline" size="small" class="w-full">
              Log In
            </AppButton>
            <AppButton size="small" class="w-full">Sign Up</AppButton>
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
          />
        </li>
      </ul>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { headerItems } from '~/utils/headerItems'

const dropDownOpen = ref(false)

const toggleDropdown = () => {
  dropDownOpen.value = !dropDownOpen.value

  if (dropDownOpen.value) {
    document.body.style.overflowY = 'hidden'
  } else {
    document.body.style.overflowY = 'auto'
  }
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
