<template>
  <label class="inline-flex items-center cursor-pointer">
    <input
      type="radio"
      class="sr-only"
      v-model="radioModel"
      v-bind="radioAttrs"
      :name="name"
      :value="value"
      :checked="radioModel === value"
    />
    <div
      class="w-10 h-10 rounded-full border-1 border-gray-500 flex items-center justify-center"
      :class="{ 'bg-primary-400 border-primary-400': radioModel === value }"
    >
      <div
        v-if="radioModel === value"
        class="w-4 h-4 rounded-full bg-white"
      ></div>
    </div>
    <Typography class="ml-2 text-primary-400">{{ label }}</Typography>
  </label>
</template>

<script setup lang="ts">
const radioModel = defineModel()

interface Props {
  value: boolean
  name: string
  label?: string
  radioAttrs?: Record<string, any>
}

withDefaults(defineProps<Props>(), {
  label: '',
  radioAttrs: () => ({}),
})
</script>
