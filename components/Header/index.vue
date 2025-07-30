<template>
  <header
    class="w-full fixed h-[63px] md:h-app-default bg-white shadow-header flex justify-center items-center px-10 z-50"
  >
    <div class="w-full max-w-[992px] flex justify-between items-center">
      <NuxtLink to="/" class="cursor-pointer">
        <NuxtImg
          preload
          src="/img/logo.png"
          alt="Qashpay Logo"
          width="118"
          format="webp"
        />
      </NuxtLink>

      <ul class="hidden md:flex items-center gap-15">
        <li v-for="item in headerItems" :key="item.label">
          <HeaderDropdown
            :item="item"
            :drop-down-open="dropDownOpen"
            :toggle-dropdown="toggleDropdown"
          />
        </li>
      </ul>

      <div class="hidden md:flex gap-5">
        <AppButton variant="outline" size="smallrounded6">Log In</AppButton>
        <AppButton size="smallrounded6" color="black">Sign Up</AppButton>
      </div>

      <HeaderMobileMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { headerItems } from '~/utils/headerItems'
import HeaderMobileMenu from '~/components/Header/HeaderMobileMenu.vue'

const dropDownOpen = ref(false)

const toggleDropdown = () => {
  dropDownOpen.value = !dropDownOpen.value
}
</script>
