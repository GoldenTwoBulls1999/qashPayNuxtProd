<template>
  <div
    class="pl-6 pr-1.5 py-1.5 cursor-pointer rounded-sm"
    :class="{
      'hover:bg-secondary-300': selectedValue !== option.code3,
      'bg-secondary-400': selectedValue === option.code3,
    }"
    @click="emit('select', option.code3)"
  >
    <Typography size="inline-small">
      {{ option.code3 }} ({{ option.country }})
    </Typography>
  </div>
</template>

<script setup lang="ts">
interface Option {
  country: string
  code: string
  code3: string
}

interface CurrencySelectItemProps {
  option: Option
  selectedValue?: string
}

withDefaults(defineProps<CurrencySelectItemProps>(), {
  selectedValue: '',
})

const emit = defineEmits(['select'])
</script>
