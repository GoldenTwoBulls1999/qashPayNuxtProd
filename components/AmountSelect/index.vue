<template>
  <div class="relative">
    <label :for="amountSelectId" class="inline-block mb-[7px]">
      <Typography
        class="text-primary-400"
        :class="{
          'text-red-500': isError,
        }"
      >
        {{ label }}
      </Typography>
    </label>
    <div :id="amountSelectId">
      <AppInput
        v-model="amountModel"
        numeric
        :placeholder="placeholder"
        :is-error="isError"
        :error="error"
      >
        <template #endIcon>
          <CurrencySelect v-model="currencyModel" />
        </template>
      </AppInput>
    </div>
    <div id="amount-select-dropdown" />
  </div>
</template>

<script setup lang="ts">
import { useId } from 'vue'
import CurrencySelect from '~/components/AmountSelect/CurrencySelect.vue'

interface Props {
  label?: string
  isError?: boolean
  error?: string
  placeholder?: string
}

withDefaults(defineProps<Props>(), {
  label: '',
  isError: false,
  error: '',
  placeholder: '',
})

const amountSelectId = useId()

const amountModel = defineModel('amount')
const currencyModel = defineModel<string>('currency')
</script>
