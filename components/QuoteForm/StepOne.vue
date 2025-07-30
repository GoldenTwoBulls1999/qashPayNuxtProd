<template>
  <Typography size="heading-5" weight="light" class="mb-21 md:text-heading-3">
    Get your custom quote
  </Typography>
  <div class="flex flex-col gap-10 mb-24">
    <AppInput
      v-model="firstName"
      label="First name"
      v-bind="firstNameAttrs"
      :is-error="isError('firstName')"
      :error="errors?.firstName"
    />
    <AppInput
      v-model="lastName"
      label="Last name"
      v-bind="lastNameAttrs"
      :is-error="isError('lastName')"
      :error="errors?.lastName"
    />
    <AppInput
      v-model="email"
      label="Email address"
      v-bind="emailAttrs"
      :is-error="isError('email')"
      :error="errors?.email"
    />
  </div>
  <Typography size="heading-5" weight="light" class="mb-12">
    Your company
  </Typography>
  <div class="flex flex-col gap-10">
    <AppInput
      v-model="companyName"
      label="Company name"
      v-bind="companyNameAttrs"
      :is-error="isError('companyName')"
      :error="errors?.companyName"
    />
    <CategorySelect
      v-model="industry"
      with-search
      search-placeholder="Search industry"
      label="Industry sector"
      category-title="Please select your industry from this list"
      :options="industries"
      :is-error="isError('industry')"
      :error="errors?.industry"
    />
    <AppSelect
      v-model="country"
      label="Country"
      :options="formattedCountries"
      :is-error="isError('country')"
      :error="errors?.country"
      with-search
    />
    <AppButton class="mt-19" @click="onSubmit" color="black">Next</AppButton>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { industries } from '~/utils/industries'
import { countries } from '~/utils/countries'
import { stepOneSchema } from '~/components/QuoteForm/schemas'
import { useQuoteRequestState } from '~/composables/useQuoteRequestState'
import type { StepOneFieldName } from '~/components/QuoteForm/types'

const state = useQuoteRequestState()

const emit = defineEmits<{
  (e: 'next'): void
}>()

const { handleSubmit, values, errors, submitCount, defineField } = useForm({
  validationSchema: toTypedSchema(stepOneSchema),
  initialValues: state.value,
})

watch(
  values,
  (newValues) => {
    const validFields: Record<string, any> = {}

    for (const key in newValues) {
      if (!errors.value[key as StepOneFieldName]) {
        validFields[key] = newValues[key as StepOneFieldName]
      }
    }

    state.value = {
      ...state.value,
      ...validFields,
    }
  },
  { deep: true }
)

const formattedCountries = computed(() =>
  countries.map((country) => ({
    value: country.alpha2.toLowerCase(),
    label: country.name,
  }))
)

const isError = (field: StepOneFieldName) =>
  submitCount.value > 0 && !!errors.value[field]

const [firstName, firstNameAttrs] = defineField('firstName', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [lastName, lastNameAttrs] = defineField('lastName', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [email, emailAttrs] = defineField('email', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [companyName, companyNameAttrs] = defineField('companyName', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [industry] = defineField('industry', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [country] = defineField('country', {
  validateOnBlur: false,
  validateOnChange: false,
})

const onSubmit = handleSubmit((values) => {
  // console.log({values});
  emit('next')
})
</script>
