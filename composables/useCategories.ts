import { ref, computed, onMounted } from 'vue'
import type { Ref } from 'vue'

interface Option {
  label: string
  value: string
}

interface Category {
  label: string
  items: Option[]
}

export function useCategorySelect(
  categories: Category[],
  searchQuery: Ref<string>,
  selectedValue?: string
) {
  const expanded: Ref<Set<string>> = ref(new Set())

  const filtered = computed(() =>
    categories
      .map((cat) => ({
        ...cat,
        items: cat.items.filter((item) =>
          item.value.toLowerCase().includes(searchQuery.value.toLowerCase())
        ),
      }))
      .filter((cat) => cat.items.length > 0)
  )

  const expandCategoryWithSelected = () => {
    if (!selectedValue) return
    for (const cat of categories) {
      if (cat.items.some((item) => item.value === selectedValue)) {
        const set = new Set(expanded.value)
        set.add(cat.label)
        expanded.value = set
      }
    }
  }

  const toggle = (label: string) => {
    const set = new Set(expanded.value)
    set.has(label) ? set.delete(label) : set.add(label)
    expanded.value = set
  }

  const isExpanded = (label: string) =>
    searchQuery.value.length > 0 || expanded.value.has(label)

  onMounted(() => {
    expandCategoryWithSelected()
  })

  return {
    filteredCategories: filtered,
    isExpanded,
    toggleCategory: toggle,
  }
}
