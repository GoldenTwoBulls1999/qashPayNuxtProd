<template>
  <div
    class="absolute mt-3 px-6 py-10 flex flex-col gap-8 w-full bg-white shadow-dropdown rounded-app-big z-50 max-h-50"
    :style="{ maxHeight: maxHeight + 'px' }"
  >
    <div v-if="withSearch || optionsTitle" class="flex flex-col gap-4 mx-6">
      <AppInput
        name="searchInput"
        v-if="withSearch"
        v-model="searchInput"
        :placeholder="searchPlaceholder"
        @click.stop
      >
        <template #startIcon>
          <Icon mode="svg" width="24" height="24" name="app-icon:search-icon" />
        </template>
      </AppInput>
      <Typography v-if="optionsTitle && filteredOptions.length !== 0">
        {{ optionsTitle }}
      </Typography>
      <Typography v-if="searchQuery.length > 0 && filteredOptions.length === 0">
        No items found
      </Typography>
    </div>

    <div
      v-if="filteredOptions.length !== 0"
      class="scrollbar-custom flex-1 overflow-y-auto flex flex-col gap-2"
    >
      <DropdownItem
        v-for="(option, index) in filteredOptions"
        :key="index"
        :option="option"
        :selected-value="dropdownModel"
        @select="handleSelect"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { debouncedRef } from '@vueuse/core'
import DropdownItem from '~/components/AppSelect/DropdownItem.vue'

interface Option {
  label: string
  value: string
}

interface DropdownProps {
  options: Option[]
  maxHeight: number
  withSearch: boolean
  searchPlaceholder: string
  optionsTitle?: string
}

const props = withDefaults(defineProps<DropdownProps>(), {
  optionsTitle: '',
})

const dropdownModel = defineModel<string>()

const searchInput = shallowRef('')
const searchQuery = debouncedRef(searchInput, 300)

const filteredOptions = computed(() =>
  props.options.filter((option) =>
    option.label.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
)

const handleSelect = (item: string) => {
  dropdownModel.value = item
}
</script>

<style scoped>
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-custom {
  scrollbar-width: thin;
}
/*
.scrollbar-custom::-webkit-scrollbar {
  background: #ffe5f2;
  border-radius: 10px;
}
.scrollbar-custom::-webkit-scrollbar-thumb {
  background: #ffc1e0;
  border-radius: 10px;
}
*/
</style>
