<template>
  <div
    class="absolute mt-3 px-6 py-10 flex flex-col gap-8 w-full bg-white shadow-dropdown rounded-app-big z-50"
    :style="{ maxHeight: maxHeight + 'px' }"
  >
    <div v-if="withSearch || categoryTitle" class="flex flex-col gap-4 mx-6">
      <AppInput
        v-if="withSearch"
        v-model="searchInput"
        :placeholder="searchPlaceholder"
        @click.stop
      >
        <template #startIcon>
          <Icon mode="svg" width="24" height="24" name="app-icon:search-icon" />
        </template>
      </AppInput>
      <Typography v-if="categoryTitle && filteredCategories.length !== 0">
        {{ categoryTitle }}
      </Typography>
      <Typography
        v-if="searchQuery.length > 0 && filteredCategories.length === 0"
      >
        No items found
      </Typography>
    </div>

    <div
      v-if="filteredCategories.length !== 0"
      class="scrollbar-hide flex-1 overflow-y-auto flex flex-col"
    >
      <CategoryItem
        v-for="(option, index) in filteredCategories"
        :key="index"
        :option="option"
        :is-expanded="isExpanded"
        :selected-value="dropdownModel"
        @select="handleSelect"
        @toggle="toggleCategory"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import CategoryItem from './CategoryItem.vue'
import { debouncedRef } from '@vueuse/core'
import { useCategorySelect } from '~/composables/useCategories'

interface Option {
  label: string
  value: string
}

interface Category {
  label: string
  items: Option[]
}

interface CategoryDropdownProps {
  options: Category[]
  maxHeight: number
  withSearch: boolean
  searchPlaceholder: string
  categoryTitle?: string
}

const props = withDefaults(defineProps<CategoryDropdownProps>(), {
  categoryTitle: '',
})

const dropdownModel = defineModel<string>()

const searchInput = shallowRef('')
const searchQuery = debouncedRef(searchInput, 300)

const { filteredCategories, toggleCategory, isExpanded } = useCategorySelect(
  props.options,
  searchQuery,
  dropdownModel.value
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
</style>
