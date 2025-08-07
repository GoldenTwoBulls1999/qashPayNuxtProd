<template>
  <div
    class="cursor-pointer flex justify-between items-center px-6 py-1.5 rounded-sm hover:bg-primary-100"
    :class="{ 'bg-primary-100': isExpanded(option.label) }"
    @click="emit('toggle', option.label)"
  >
    <Typography>
      {{ option.label }}
    </Typography>
    <Icon
      mode="svg"
      width="14"
      height="7"
      name="app-icon:dropdown-arrow-down"
      class="transition-transform duration-200"
      :style="{
        transform: isExpanded(option.label) ? 'rotate(180deg)' : 'rotate(0deg)',
      }"
    />
  </div>
  <div v-if="isExpanded(option.label)" class="flex flex-col pl-6">
    <div
      v-for="(item, index) in option.items"
      :key="index"
      class="pl-6 pr-1.5 py-1.5 cursor-pointer rounded-sm"
      :class="{
        'hover:bg-secondary-300': selectedValue !== item.value,
        'bg-secondary-400': selectedValue === item.value,
      }"
      @click="emit('select', item.value)"
    >
      <Typography>
        {{ item.label }}
      </Typography>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Option {
  label: string
  value: string
}

interface Category {
  label: string
  items: Option[]
}

interface CategoryProps {
  option: Category
  isExpanded: (label: string) => boolean
  selectedValue?: string
}

withDefaults(defineProps<CategoryProps>(), {
  selectedValue: '',
})

const emit = defineEmits(['select', 'toggle'])
</script>
