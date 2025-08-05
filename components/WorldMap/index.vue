<script setup lang="ts">
import { ref } from 'vue'
import { countries } from '~/utils/countries'
import { paymentMethodsOrder } from '~/utils/paymentMethodsOrder'
import Map from '~/components/WorldMap/MapInner.vue'
import type { Lookup } from 'geoip-country'

const selected = ref('')
const isExpanded = ref(false)

const formattedCountries = computed(() =>
  countries.map((country) => ({
    value: country.alpha2.toLowerCase(),
    label: country.name,
  }))
)

const selectedCountry = computed(() =>
  countries.find(
    ({ alpha2 }) => alpha2.toLowerCase() === selected.value?.toLowerCase()
  )
)

const paymentMethods = computed(
  () =>
    countries.find(
      ({ alpha2 }) => alpha2.toLowerCase() === selected.value?.toLowerCase()
    )?.paymentMethods || []
)

onMounted(async () => {
  const country = await $fetch('/api/country', {
    method: 'GET',
  })
  selected.value = (country.geo as Lookup)?.country.toLowerCase()
})

const sortedPaymentMethods = (paymentMethods: string[]) => {
  return paymentMethods.sort((a, b) => {
    const indexA = paymentMethodsOrder.indexOf(a)
    const indexB = paymentMethodsOrder.indexOf(b)

    const posA = indexA === -1 ? Number.MAX_VALUE : indexA
    const posB = indexB === -1 ? Number.MAX_VALUE : indexB

    return posA - posB
  })
}
</script>

<template>
  <div class="flex justify-start items-start gap-20">
    <div class="w-full md:w-[305px] relative">
      <AppSelect v-model="selected" label="" :options="formattedCountries">
        <template v-if="selected" #selected>
          <div class="flex items-center gap-8">
            <div class="w-16 h-10.5 rounded overflow-hidden">
              <span
                class="w-full! bg-cover! h-full"
                :class="`fi fi-${selected}`"
              />
            </div>
            <Typography
              size="body-large"
              weight="medium"
              class="h-[21px] leading-[21px] text-gray-500 truncate"
            >
              {{ selectedCountry?.name }}
            </Typography>
          </div>
        </template>
      </AppSelect>
      <div
        v-if="paymentMethods.length"
        class="mt-[38px] border border-gray-300 bg-white rounded-md shadow-sm absolute w-full md:w-[305px]"
        :class="{
          'border-0 !shadow-none':
            sortedPaymentMethods(paymentMethods).length < 6,
        }"
      >
        <div class="relative">
          <div
            v-for="(method, index) in isExpanded ?
              sortedPaymentMethods(paymentMethods)
            : sortedPaymentMethods(paymentMethods).slice(0, 6)"
            :key="index"
            class="border-b-1 px-8 py-7 border-gray-300"
            :class="{
              'max-h-8 overflow-hidden !border-b-0': !isExpanded && index === 5,
            }"
          >
            <PaymentMethod :method-name="method" />
          </div>
          <div
            v-if="
              !isExpanded && sortedPaymentMethods(paymentMethods).length > 5
            "
            class="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white from-2% to-transparent to-98% z-10 pointer-events-none"
          />
        </div>
        <AppButton
          v-if="paymentMethods.length > 5"
          variant="text"
          :underline="false"
          class="uppercase text-secondary-500 text-body-normal p-8! w-full justify-start"
          :class="isExpanded ? 'pt-8!' : 'pt-4!'"
          @click="isExpanded = !isExpanded"
        >
          {{ isExpanded ? 'Hide' : 'Show all methods' }}
        </AppButton>
      </div>
      <div
        v-else-if="selected && paymentMethods.length === 0"
        class="mt-40 px-4 py-5 rounded-lg bg-secondary-500/10 text-secondary-500 max-w-full"
      >
        <Typography class="text-center text-[18px] leading-body-large">
          No available methods in this country
        </Typography>
      </div>
    </div>
    <div class="hidden md:flex grow flex-col md:flex-row gap-4">
      <Map v-model="selected" />
    </div>
  </div>
</template>

<style scoped>
.world-map path {
  stroke: #fff;
  stroke-width: 1;
}
</style>
