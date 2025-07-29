<template>
  <label class="inline-flex items-start gap-8 cursor-pointer select-none">
    <input
      v-model="checkboxModel"
      v-bind="$attrs"
      class="sr-only peer"
      type="checkbox"
      :name="name"
      :value="value"
      :checked="checkboxModel === value"
    />
    <div
      class="flex justify-center items-center transition-all duration-300 min-w-10 min-h-10 rounded-sm border-1 border-primary-400 bg-white bg-no-repeat bg-center hover:border-secondary-500"
    >
      <Icon
        v-if="checkboxModel === value"
        mode="svg"
        width="13"
        height="10"
        name="app-icon:checkmark-icon"
      />
    </div>
    <slot />
  </label>
</template>

<script setup lang="ts">
const checkboxModel = defineModel<boolean>()

interface Props {
  value: boolean
  name: string
}

withDefaults(defineProps<Props>(), {})
</script>
