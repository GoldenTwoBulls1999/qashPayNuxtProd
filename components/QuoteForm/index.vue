<template>
  <div class="w-full flex flex-col gap-12 pb-69">
    <div v-if="formLoading" class="hidden md:block">
      <Typography size="heading-3" weight="light" class="mb-5">
        Great job!
      </Typography>
    </div>
    <ProgressBar :current-step="currentStep" :total-steps="steps.length + 1"/>
    <StepOne v-if="currentStep === 0" @next="nextStep"/>
    <StepTwo
        v-else
        :loading="formLoading"
        @submit="submitForm"
        @back="prevStep"
    />
  </div>
</template>

<script setup lang="ts">
import ProgressBar from '~/components/QuoteForm/ProgressBar.vue'
import StepOne from '~/components/QuoteForm/StepOne.vue'
import StepTwo from '~/components/QuoteForm/StepTwo.vue'
import {useQuoteRequestState} from '~/composables/useQuoteRequestState'
import {useQuoteResponseState} from '~/composables/useQuoteResponseState'
import type {QuoteFormData} from "~/components/QuoteForm/types";

const state = useQuoteRequestState()
const quoteState = useQuoteResponseState()

const steps = [StepOne, StepTwo]
const currentStep = ref(0)
const formLoading = ref(false)

const nextStep = () => {
  currentStep.value++
}

const prevStep = () => {
  currentStep.value--
}

type QuoteResponse = {
  message: string;
  quote: {
    Unique_Quote_ID: string;
    "IC++ Fee": string;
    "Transaction Fee": string;
    "Refund Fee": string;
    "3DS Fee": string;
    "Chargeback Fee": string;
    "Monthly Minimum": string;
    "Quote Currency": string;
    "Risk Group": string;
  };
};

const submitForm = async () => {
  formLoading.value = true

  if (currentStep.value === steps.length - 1) {
    currentStep.value++
  }

  formLoading.value = false
  const requestBody = toRaw(state.value) as QuoteFormData

  console.log('requestBody', requestBody)
  console.log(JSON.stringify(requestBody))

  const res = await $fetch<{statusCode: number, body: string}>('/api/submit_form', {
    method: 'POST',
    body: requestBody
  })

  const body = JSON.parse(res.body) as QuoteResponse

  if (body.message === "Quote determination successful!") {
    quoteState.value.message = body.message
    quoteState.value.successful = true
    quoteState.value.quoteId = body.quote.Unique_Quote_ID
    quoteState.value.firstName = requestBody.firstName
    quoteState.value.lastName = requestBody.lastName
    quoteState.value.companyName = requestBody.companyName
    quoteState.value.icFee = body.quote["IC++ Fee"]
    quoteState.value.transactionFee = body.quote["Transaction Fee"]
    quoteState.value.refundFee = body.quote["Refund Fee"]
    quoteState.value.threeDSFee = body.quote["3DS Fee"]
    quoteState.value.chargebackFee = body.quote["Chargeback Fee"]
    quoteState.value.monthlyMin = body.quote["Monthly Minimum"]
    quoteState.value.currency = body.quote["Quote Currency"]
    quoteState.value.riskGroup = body.quote["Risk Group"]
  } else if (body.message === "Quote declined.") {
    quoteState.value.message = body.message
  }

  await navigateTo('/quote-result')
}
</script>
