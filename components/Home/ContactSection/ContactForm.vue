<template>
  <div class="md:max-w-[405px]">
    <Typography size="heading-5" class="mb-16">
      Get your instant quote
    </Typography>
    <form class="flex flex-col gap-10 items-start">
      <AppInput
        label="First name"
        v-model="firstName"
        class="max-md:border-primary-400"
        :is-error="isError('firstName')"
        :error="errors?.firstName"
      />
      <AppInput
        label="Last name"
        v-model="lastName"
        class="max-md:border-primary-400"
        :is-error="isError('lastName')"
        :error="errors?.lastName"
      />
      <AppInput
        label="Email address"
        v-model="email"
        class="max-md:border-primary-400"
        :is-error="isError('email')"
        :error="errors?.email"
      />
      <AppButton @click="onSubmit" class="max-md:w-full mt-10" color="black"
        >Continue application</AppButton
      >
    </form>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { contactFormSchema } from '~/components/Home/ContactSection/schemas'
import { useQuoteRequestState } from '~/composables/useQuoteRequestState'
import type { ContactFormFieldName } from '~/components/Home/ContactSection/types'
import type { StepOneFieldName } from '~/components/QuoteForm/types'

const state = useQuoteRequestState()

const { handleSubmit, values, errors, submitCount, defineField } = useForm({
  validationSchema: toTypedSchema(contactFormSchema),
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

const isError = (field: ContactFormFieldName) =>
  submitCount.value > 0 && !!errors.value[field]

const [firstName] = defineField('firstName', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [lastName] = defineField('lastName', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [email] = defineField('email', {
  validateOnBlur: false,
  validateOnChange: false,
})

const onSubmit = handleSubmit(async () => await navigateTo('/quote-request'))
</script>

<style scoped></style>
