<template>
  <div ref="selectRef" class="relative">
    <label :for="selectId" class="inline-block mb-[7px]">
      <Typography
        class="text-primary-400"
        :class="{
          'text-red-500': isError,
        }"
      >
        {{ label }}
      </Typography>
    </label>
    <div
      :id="selectId"
      tabindex="0"
      class="cursor-pointer w-full px-8 py-[14.5px] flex justify-between items-center border-1 border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-500"
      :class="{ 'border-red-500': isError }"
      @click="toggleOpen"
    >
      <Typography
        size="body-large"
        class="h-[21px] leading-[21px] text-gray-500"
      >
        {{ selectedOption }}
      </Typography>
      <Icon
        mode="svg"
        width="14"
        height="7"
        name="app-icon:dropdown-arrow-down"
        class="transition-transform duration-200"
        :style="{
          transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
        }"
      />
    </div>
    <Typography
      v-if="isError"
      size="inline-small"
      class="absolute text-red-500"
    >
      {{ error }}
    </Typography>

    <CategoryDropdown
      v-if="isOpen"
      v-model="selectModel"
      :options="options"
      :max-height="dropdownMaxHeight"
      :with-search="withSearch"
      :category-title="categoryTitle"
      :search-placeholder="searchPlaceholder"
      @select="handleSelect"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, useId } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useDropdownPositioning } from '~/composables/useDropdownPosition'
import CategoryDropdown from '~/components/CategorySelect/CategoryDropdown.vue'

interface Option {
  label: string
  value: string
}

interface Category {
  label: string
  items: Option[]
}

interface CategorySelectProps {
  options: Category[]
  label: string
  isError?: boolean
  error?: string
  withSearch?: boolean
  searchPlaceholder?: string
  categoryTitle?: string
}

const props = withDefaults(defineProps<CategorySelectProps>(), {
  isError: false,
  error: '',
  withSearch: false,
  searchPlaceholder: '',
  categoryTitle: '',
})

const selectModel = defineModel<string>()

const selectId = useId()

const selectRef = ref<HTMLElement | null>(null)
const selectedOption = ref('')
const isOpen = ref(false)

onClickOutside(selectRef, () => {
  isOpen.value = false
})

const { dropdownMaxHeight, updatePosition } = useDropdownPositioning()

const handleSelect = (value: string) => {
  selectModel.value = value
  isOpen.value = false
}

const toggleOpen = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    updatePosition(selectRef.value)
  }
}

watch(selectModel, () => {
  props.options.find((category) => {
    for (const option of category.items) {
      if (option.value === (selectModel.value as string))
        selectedOption.value = option.label
    }
  })
})
</script>
