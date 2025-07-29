<template>
  <div
    class="overflow-hidden mt-40 flex flex-col md:flex-row md:w-full max-md:-mx-10 md:rounded-app-big md:shadow-benefit max-md:bg-[url(/img/partners_background.png)] bg-cover border-[0.5px] border-gray-200">
    <div
      class="md:rounded-tl-app-big md:rounded-bl-app-big md:min-w-1/2 flex justify-center pt-35 bg-[url(/img/partners_background.png)] bg-cover">
      <Typography size="heading-2" weight="medium" class="max-md:text-center">
        Become a
        <br />
        QashPay Partner
      </Typography>
    </div>

    <div class="md:min-w-1/2 md:bg-[#FEFEFE] px-20 pt-16 pb-22">
      <form class="flex flex-col gap-10 items-start">
        <AppInput v-model="name" label="Name" class="max-md:border-primary-400" :is-error="isError('name')"
          :error="errors?.name" />
        <AppInput v-model="email" placeholder="example@email.com" label="Email" class="max-md:border-primary-400"
          :is-error="isError('email')" :error="errors?.email" />
        <div class="w-full flex items-center gap-10">
          <AppSelect v-model="areaCode" label="Area Code" class="min-w-65" :options="formattedAreaCodes"
            :is-error="isError('areaCode')" :error="errors?.areaCode" />
          <AppInput v-model="phoneNumber" label="Phone number" class="max-md:border-primary-400"
            :is-error="isError('phoneNumber')" :error="errors?.phoneNumber" />
        </div>
        <div class="w-full flex flex-col md:flex-row md:items-center justify-between">
          <AppCheckbox v-model="individualCheck" :value="true" name="is_checked">
            <Typography class="text-primary-400">I'm individual</Typography>
          </AppCheckbox>
          <AppButton class="max-md:w-full" @click="onSubmit">
            Become a Partner
          </AppButton>
        </div>
        <div class="mt-40">CAPTCHA</div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useForm } from 'vee-validate'
import { toTypedSchema } from '@vee-validate/zod'
import { useQuoteRequestState } from '~/composables/useQuoteRequestState'
import { countries } from '~/utils/countries'
import { becomePartnerFormSchema } from '~/components/Partners/BecomePartnerForm/schemas'
import type { BecomePartnerFormFieldName } from '~/components/Partners/BecomePartnerForm/types'
import AppCheckbox from '~/components/AppCheckbox.vue'

const state = useQuoteRequestState()

const { handleSubmit, values, errors, submitCount, defineField } = useForm({
  validationSchema: toTypedSchema(becomePartnerFormSchema),
  initialValues: state.value,
})

watch(
  values,
  (newValues) => {
    const validFields: Record<string, any> = {}

    for (const key in newValues) {
      if (!errors.value[key as BecomePartnerFormFieldName]) {
        validFields[key] = newValues[key as BecomePartnerFormFieldName]
      }
    }

    state.value = {
      ...state.value,
      ...validFields,
    }
  },
  { deep: true }
)

const formattedAreaCodes = computed(() => {
  const dialCodes = countries
    .filter((country) => country.dialCode)
    .map((country) => country.dialCode)
  const uniqueDialCodes = [...new Set(dialCodes)]

  return uniqueDialCodes.map((dialCode) => ({
    value: dialCode,
    label: `+${dialCode}`,
  }))
})

const isError = (field: BecomePartnerFormFieldName) =>
  submitCount.value > 0 && !!errors.value[field]

const [name] = defineField('name', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [email] = defineField('email', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [areaCode] = defineField('areaCode', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [phoneNumber] = defineField('phoneNumber', {
  validateOnBlur: false,
  validateOnChange: false,
})
const [individualCheck] = defineField('individualCheck', {
  validateOnBlur: false,
  validateOnChange: false,
})

const onSubmit = handleSubmit(async (values: any) => console.log('values', values))
</script>

<style scoped></style>
