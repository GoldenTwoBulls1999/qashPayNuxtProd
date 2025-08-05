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
          format="png"
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
        <template v-for="item in loginItems">
          <LoginDropdown
            :item="item"
            :drop-down-open="loginDropDownOpen"
            :toggle-dropdown="toggleLoginDropdown"
          />
        </template>
        <AppButton size="smallrounded6" color="black" to="/quote-request"
          >Sign Up</AppButton
        >
      </div>

      <HeaderMobileMenu />
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { headerItems } from '~/utils/headerItems'
import { loginItems } from '~/utils/loginItems'
import HeaderMobileMenu from '~/components/Header/HeaderMobileMenu.vue'
import LoginDropdown from '~/components/Header/LoginDropdown.vue'

const dropDownOpen = ref(false)

const toggleDropdown = () => {
  dropDownOpen.value = !dropDownOpen.value
}

const loginDropDownOpen = ref(false)

const toggleLoginDropdown = () => {
  dropDownOpen.value = !dropDownOpen.value
}
</script>
