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
      class="bg-white cursor-pointer w-full px-8 py-[14.5px] flex justify-between items-center border-1 border-gray-400 rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary-500"
      :class="{ 'border-red-500': isError }"
      @click="toggleOpen"
    >
      <slot v-if="!!slots.selected" name="selected" />
      <Typography
        v-if="!slots.selected"
        size="body-large"
        class="h-[21px] leading-[21px] text-gray-500 truncate"
      >
        {{ selectedOption?.label }}
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

    <Dropdown
      v-if="isOpen"
      v-model="selectModel"
      :options="options"
      :max-height="dropdownMaxHeight"
      :with-search="withSearch"
      :options-title="optionsTitle"
      :search-placeholder="searchPlaceholder"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, useId, useSlots } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useDropdownPositioning } from '~/composables/useDropdownPosition'
import Dropdown from '~/components/AppSelect/Dropdown.vue'

interface Option {
  label: string
  value: string
}

interface CategorySelectProps {
  options: Option[]
  label: string
  isError?: boolean
  error?: string
  withSearch?: boolean
  searchPlaceholder?: string
  optionsTitle?: string
}

const props = withDefaults(defineProps<CategorySelectProps>(), {
  isError: false,
  error: '',
  withSearch: false,
  searchPlaceholder: '',
  optionsTitle: '',
})

const selectModel = defineModel<string>()

const selectId = useId()
const slots = useSlots()

const selectRef = ref<HTMLElement | null>(null)
const isOpen = ref(false)

onClickOutside(selectRef, () => {
  isOpen.value = false
})

watch(selectModel, () => {
  isOpen.value = false
})

const { dropdownMaxHeight, updatePosition } = useDropdownPositioning()

const toggleOpen = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    updatePosition(selectRef.value)
  }
}

const selectedOption = computed(() =>
  props.options.find((option) => option.value === selectModel.value)
)
</script>
