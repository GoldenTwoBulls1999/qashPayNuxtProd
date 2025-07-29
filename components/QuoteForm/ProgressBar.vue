<template>
  <div class="flex items-center w-full gap-4">
    <div class="w-full h-4 bg-primary-100 rounded overflow-hidden">
      <div
        class="h-full bg-success-500 transition-all duration-300"
        :style="{ width: `${(currentStep / (totalSteps - 1)) * 100}%` }"
      />
    </div>
    <p class="text-[13px]/[13px] text-primary-300">
      {{ (currentStep / (totalSteps - 1)) * 100 }}%
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  currentStep: number
  totalSteps: number
}
defineProps<Props>()
</script>
