<template>
  <Header />
  <main
    v-bind="$attrs"
    class="w-full max-w-full flex flex-col items-center px-10 pt-app-mobile md:pt-app-default"
  >
    <div class="w-full max-w-[992px]">
      <slot />
    </div>
  </main>
  <Footer />
</template>

<script setup lang="ts"></script>
