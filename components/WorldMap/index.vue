<script setup lang="ts">
import { ref } from 'vue'
import { countries } from '~/utils/countries'
import Map from '~/components/WorldMap/MapInner.vue'
import type { Lookup } from 'geoip-country'

const selected = ref('')

const formattedCountries = computed(() =>
  countries.map((country) => ({
    value: country.alpha2.toLowerCase(),
    label: country.name,
  }))
)

const selectedCountry = computed(() =>
  countries.find(
    ({ alpha2 }) => alpha2.toLowerCase() === selected.value.toLowerCase()
  )
)

const paymentMethods = computed(
  () =>
    countries.find(
      ({ alpha2 }) => alpha2.toLowerCase() === selected.value.toLowerCase()
    )?.paymentMethods || []
)

onMounted(async () => {
  const country = await $fetch('/api/country', {
    method: 'GET',
  })
  selected.value = (country.geo as Lookup)?.country.toLowerCase()
})
</script>

<template>
  <div class="flex justify-start items-start gap-20">
    <div class="w-full md:w-[305px]">
      <AppSelect v-model="selected" label="" :options="formattedCountries">
        <template v-if="selected" #selected>
          <div class="flex items-center gap-8">
            <div
              class="w-16 h-10.5 rounded-md overflow-hidden"
            >
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
      <div v-if="paymentMethods.length" class="mt-10 md:mt-30">
        <div
          v-for="(method, index) in paymentMethods"
          :key="index"
          class="border-b-1 border-primary-200 px-8 py-7"
        >
          <PaymentMethod :methodName="method" />
        </div>
      </div>
      <div
        v-else-if="selected"
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
