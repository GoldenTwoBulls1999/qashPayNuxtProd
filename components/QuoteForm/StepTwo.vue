<template>
  <div v-if="quoteRequestLoadingState.isLoading" class="max-md:pt-7">
    <Typography size="heading-4" weight="medium" class="mb-12 text-center">
      Great job!
    </Typography>
    <ProgressBar :current-step="quoteRequestLoadingState.progress" :total-steps=100 class="mt-[41px] mb-[32px]" />
    <Typography class="md:mt-4 text-center text-[24px]">
      We’re crunching the numbers...
    </Typography>
  </div>
  <div v-else>
    <Typography size="heading-5" weight="light" class="mb-21 md:text-heading-4">
      Tell us about your requirements
    </Typography>
    <div class="flex flex-col gap-10">
      <AmountSelect
        placeholder="0"
        label="Monthly transaction volume"
        v-model:amount="amount"
        v-model:currency="currency"
        :is-error="isError('monthlyTransactionVolumeAmount')"
        :error="errors?.monthlyTransactionVolumeAmount"
      />
      <AppInput
        name="transactions"
        numeric
        placeholder="0"
        label="Monthly card transactions"
        v-model="transactions"
        :is-error="isError('monthlyCardTransactions')"
        :error="errors?.monthlyCardTransactions"
      />
      <AppInput
        name="chargebacks"
        numeric
        placeholder="0"
        label="Monthly chargebacks"
        v-model="chargebacks"
        :is-error="isError('monthlyChargebacks')"
        :error="errors?.monthlyChargebacks"
      />
      <div class="flex flex-col gap-7 mt-6">
        <Typography
          class="md:text-primary-400"
          :class="{'!text-red-500': isError('processRecurringPayments')}"
        >
          Do you process recurring payments (e.g. subscriptions)?
        </Typography>
        <div class="flex flex-col justify-center gap-8">
          <AppRadio
            v-model="payments"
            name="payment"
            label="Yes"
            :value="true"
          />
          <AppRadio
            v-model="payments"
            name="payment"
            label="No"
            :value="false"
          />
        </div>
      </div>
      <div class="flex flex-col gap-7 mt-6">
        <Typography
          class="md:text-primary-400"
          :class="{'!text-red-500': isError('processCardPeriod')}"
        >
          Have you been processing cards for longer than six (6) months?
        </Typography>
        <div class="flex flex-col justify-center gap-8">
          <AppRadio v-model="period" name="period" label="Yes" :value="true" />
          <AppRadio v-model="period" name="period" label="No" :value="false" />
        </div>
      </div>

      <div class="mt-[42px] flex flex-col-reverse md:flex-row gap-6">
        <AppButton
          variant="outline"
          color="white"
          class="min-w-75 col"
          @click="$emit('back')"
        >
          Back
        </AppButton>
        <AppButton @click="onSubmit" class="w-full" color="black"
          >Get quote</AppButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { stepTwoSchema } from '~/components/QuoteForm/schemas'
import { useQuoteRequestState } from '~/composables/useQuoteRequestState'
import type { StepTwoFieldName } from '~/components/QuoteForm/types'
import {useQuoteRequestLoadingState} from "~/composables/useQuoteRequestLoadingState";
import ProgressBar from "~/components/QuoteForm/ProgressBar.vue";

const state = useQuoteRequestState()
const quoteRequestLoadingState = useQuoteRequestLoadingState()

const emit = defineEmits<{
  (e: 'submit'): void
  (e: 'back'): void
}>()

const { handleSubmit, values, errors, submitCount, defineField } = useForm({
  validationSchema: toTypedSchema(stepTwoSchema),
  initialValues: state.value,
})

watch(
  values,
  (newValues) => {
    const validFields: Record<string, any> = {}

    for (const key in newValues) {
      if (!errors.value[key as StepTwoFieldName]) {
        validFields[key] = newValues[key as StepTwoFieldName]
      }
    }

    state.value = {
      ...state.value,
      ...validFields,
    }
  },
  { deep: true }
)

let intervalId: ReturnType<typeof setInterval> | null = null

watch(
    () => quoteRequestLoadingState.value.isLoading,
    (newValue, oldValue) => {
      if (!oldValue && newValue) {
        intervalId = setInterval(() => {
          const r = Math.random() / 3
          const increment = Math.trunc((100 - quoteRequestLoadingState.value.progress) * r)
          const newProgress = quoteRequestLoadingState.value.progress + increment

          if (newProgress < 100) {
            quoteRequestLoadingState.value.progress = newProgress
          }
        }, 500)
      }
    }
)

onUnmounted(() => {
  if (intervalId !== null) {
    clearInterval(intervalId)
    intervalId = null
  }
});

const isError = (field: StepTwoFieldName) =>
  submitCount.value > 0 && !!errors.value[field]

const [currency] = defineField('monthlyTransactionVolumeCurrency')
const [amount] = defineField('monthlyTransactionVolumeAmount', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [transactions] = defineField('monthlyCardTransactions', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [chargebacks] = defineField('monthlyChargebacks', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [payments] = defineField('processRecurringPayments', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [period] = defineField('processCardPeriod', {
  validateOnBlur: false,
  validateOnChange: false,
})

const onSubmit = handleSubmit(() => {
  window.scrollTo(0, 0)
  emit('submit')
})
</script>
