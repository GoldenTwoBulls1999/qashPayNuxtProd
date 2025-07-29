<template>
  <div ref="dropdownRef">
    <div class="flex items-center cursor-pointer" @click="toggleOpen">
      <div
        class="w-10 h-10 ring ring-gray-400 rounded-full overflow-hidden mr-4"
      >
        <span
          class="w-full! bg-cover! h-full"
          :class="`fi fi-${selectedCurrencyCode}`"
        />
      </div>
      <Typography class="mr-4 text-primary-400">{{ selectModel }}</Typography>
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
    <ClientOnly>
      <Teleport to="#amount-select-dropdown">
        <div
          v-show="isOpen"
          ref="teleportRef"
          class="absolute mt-3 px-6 py-10 flex flex-col gap-8 w-full bg-white shadow-dropdown rounded-app-big z-50"
          :style="{ maxHeight: dropdownMaxHeight + 'px' }"
        >
          <div
            class="scrollbar-hide flex-1 overflow-y-auto flex flex-col gap-2"
          >
            <CurrencySelectItem
              v-for="(option, index) in currencies"
              :key="index"
              :option="option"
              :selected-value="selectModel"
              @select="handleSelect"
            />
          </div>
        </div>
      </Teleport>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useDropdownPositioning } from '~/composables/useDropdownPosition'
import { currencies } from '~/utils/currencies'
import CurrencySelectItem from '~/components/AmountSelect/CurrencySelectItem.vue'

interface Props {
  label?: string
  isError?: boolean
  error?: string | null
  placeholder?: string
  amountAttrs?: Record<string, any>
}

withDefaults(defineProps<Props>(), {
  label: '',
  isError: false,
  error: '',
  placeholder: '',
  amountAttrs: () => ({}),
})

const selectModel = defineModel<string>()

const isOpen = ref(false)
const dropdownRef = ref<HTMLElement | null>(null)
const teleportRef = ref<HTMLElement | null>(null)

onClickOutside(
  dropdownRef,
  () => {
    isOpen.value = false
  },
  { ignore: [teleportRef] }
)

const { dropdownMaxHeight, updatePosition } = useDropdownPositioning()

const selectedCurrencyCode = computed(
  () =>
    currencies.find(
      (currency) => currency.code3 === (selectModel.value as string)
    )?.code
)

const toggleOpen = () => {
  isOpen.value = !isOpen.value

  if (isOpen.value) {
    updatePosition(dropdownRef.value)
  }
}

const handleSelect = (item: string) => {
  selectModel.value = item
  isOpen.value = false
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
