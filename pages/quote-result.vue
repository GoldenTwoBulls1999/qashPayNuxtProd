<template>
  <section
    class="w-full pt-19 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center"
  >
    <div class="w-full max-h-fit flex flex-col items-center">
      <Typography size="heading-4" class="mb-10">
        Your account has been
        {{ riscScore === 'declined' ? 'declined' : 'pre-approved' }}
      </Typography>
      <RiscScore v-model="riscScore" />
      <div
        class="w-full md:max-w-[476px] flex flex-col items-center justify-between"
      >
        <div
          v-show="riscScore !== 'declined'"
          class="w-full flex flex-col gap-16"
        >
          <Typography size="heading-2" weight="light" class="md:text-heading-2">
            Here’s your custom quote
          </Typography>
          <div
            class="md:border-1 md:border-gray-border md:rounded-app-big md:p-20 md:mb-app-default md:shadow-[8px_8px_24px_rgba(0,0,0,0.1)]"
          >
            <div
              class="max-md:border-1 max-md:border-gray-border max-md:rounded-app-big max-md:px-10 max-md:py-11 max-md:shadow-[8px_8px_24px_rgba(0,0,0,0.1)]"
            >
              <div class="flex gap-22 justify-between mb-25">
                <div class="flex-1">
                  <Typography class="text-[#615878]">Quote#</Typography>
                  <Typography class="text-[#615878] leading-100">{{
                    responseState.quoteId
                  }}</Typography>
                </div>
                <div class="flex-1">
                  <Typography class="text-[#615878]">Prepared for:</Typography>
                  <Typography size="heading-6">{{
                    responseState.firstName + ' ' + responseState.lastName
                  }}</Typography>
                  <Typography size="heading-6">{{
                    responseState.companyName
                  }}</Typography>
                </div>
              </div>
              <Typography size="heading-5" weight="medium" class="mb-12">
                Processing fee:
              </Typography>
              <div class="flex justify-between mb-19">
                <Typography weight="medium" class="text-mobile-heading-6">
                  Interchange ++
                </Typography>
                <Typography weight="medium" class="text-mobile-heading-6">
                  <span class="text-secondary-500">
                    {{ responseState.icFee }}%
                  </span>
                  &plus; {{ responseState.currency }}
                </Typography>
              </div>
              <div>
                <div class="flex justify-between">
                  <Typography class="text-[14px]">Refunds</Typography>
                  <Typography class="text-[14px]">{{
                    responseState.currency + ' ' + responseState.refundFee
                  }}</Typography>
                </div>
                <div class="flex justify-between">
                  <Typography class="text-[14px]">Monthly Minimum</Typography>
                  <Typography class="text-[14px]">{{
                    responseState.currency + ' ' + responseState.monthlyMin
                  }}</Typography>
                </div>
                <div class="flex justify-between">
                  <Typography class="text-[14px]">3D Secure</Typography>
                  <Typography class="text-[14px]">{{
                    responseState.currency + ' ' + responseState.threeDSFee
                  }}</Typography>
                </div>
                <div class="flex justify-between">
                  <Typography class="text-[14px]">Chargebacks</Typography>
                  <Typography class="text-[14px]">{{
                    responseState.currency + ' ' + responseState.chargebackFee
                  }}</Typography>
                </div>
              </div>
            </div>
            <div class="mt-18 max-md:mb-30 flex flex-col gap-10 md:flex-row">
              <AppButton
                :loading="loading"
                class="bg-primary-500 hover:bg-primary-400 focus:bg-primary-300 md:w-full"
                @click="handleAccept"
              >
                Accept
              </AppButton>
              <AppButton
                variant="outline"
                :disabled="loading"
                @click="handleDecline"
              >
                Decline
              </AppButton>
            </div>
          </div>
        </div>
        <div
          v-show="riscScore !== 'declined'"
          class="bg-primary-100 flex rounded-app-big p-11 gap-6"
        >
          <Icon
            mode="svg"
            width="21"
            height="21"
            name="app-icon:info-icon"
            class="min-w-[21px]"
          />
          <Typography>
            Once accepted, you will receive an email containing access to our
            onboarding portal. This can be accessed via Desktop, IOS App or
            Android. App.
          </Typography>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { useQuoteResponseState } from '~/composables/useQuoteResponseState'
import { useQuoteRequestState } from '~/composables/useQuoteRequestState'
import type { QuoteFormData } from '~/components/QuoteForm/types'
import type { RiscScore } from '~/components/RiscScore/index.vue'

type AddToAcceptQuotesPayload = {
  Company_Name: string
  Country: string
  Accepted: string
}

type InvokeZapierPayload = {
  Unique_Quote_ID: string
  Accepted: string
}

const requestState = useQuoteRequestState()
const responseState = useQuoteResponseState()

const loading = ref(false)
const riscScore = ref<RiscScore>('low')

watchEffect(() => {
  if (responseState.value.message === 'Quote declined.') {
    riscScore.value = 'declined'
  } else {
    if (responseState.value.riskGroup === 'Low Risk') {
      riscScore.value = 'low'
    } else if (responseState.value.riskGroup === 'Medium Risk') {
      riscScore.value = 'medium'
    } else if (responseState.value.riskGroup === 'High Risk') {
      riscScore.value = 'high'
    }
  }
})

const handleDecline = async () => {
  const requestInvokeBody: InvokeZapierPayload = {
    Unique_Quote_ID: responseState.value.quoteId,
    Accepted: 'No',
  }

  const resInvoke = await $fetch<{ statusCode: number; body: string }>(
    '/api/invoke_zapier',
    {
      method: 'POST',
      body: requestInvokeBody,
    }
  )

  console.log('resInvoke:', resInvoke)

  await navigateTo('/')
}

const handleAccept = async () => {
  const requestRaw = toRaw(requestState.value) as QuoteFormData

  const requestAddBody: AddToAcceptQuotesPayload = {
    Company_Name: requestRaw.companyName,
    Country: requestRaw.country,
    Accepted: 'Yes',
  }

  const resAdd = await $fetch<{ statusCode: number; body: string }>(
    '/api/add_to_accept_quotes',
    {
      method: 'POST',
      body: requestAddBody,
    }
  )

  const requestInvokeBody: InvokeZapierPayload = {
    Unique_Quote_ID: responseState.value.quoteId,
    Accepted: 'Yes',
  }

  const resInvoke = await $fetch<{ statusCode: number; body: string }>(
    '/api/invoke_zapier',
    {
      method: 'POST',
      body: requestInvokeBody,
    }
  )

  await navigateTo('/quote-success')
}
</script>
