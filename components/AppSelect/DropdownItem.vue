<template>
  <div
    class="pl-6 pr-1.5 py-1.5 cursor-pointer rounded-sm"
    :class="{
      'hover:bg-secondary-300': selectedValue !== option.value,
      'bg-secondary-400': selectedValue === option.value,
    }"
    @click="emit('select', option.value)"
  >
    <Typography>
      {{ option.label }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
interface Option {
  label: string
  value: string
}

interface DropdownItemProps {
  option: Option
  selectedValue?: string
}

withDefaults(defineProps<DropdownItemProps>(), {
  selectedValue: '',
})

const emit = defineEmits(['select'])
</script>
