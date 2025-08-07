<template>
  <div
    class="w-full mb-38 pt-10 pb-[65px] bg-radial bg-radial-[ellipse_50%_50%_at_50%_100%] from-gradient-gray/40 to-white"
  >
    <Typography
      v-if="riscScore"
      size="heading-6"
      class="text-center text-primary-300 mb-40"
    >
      Risk score: <span class="capitalize">{{ riscScore }}</span>
    </Typography>
    <div class="flex gap-5 max-w-[498px] mx-auto relative">
      <div class="flex-1 flex flex-col items-center gap-7">
        <div
          v-if="riscScore && (riscScore as RiscScore) === 'declined'"
          class="absolute top-0 -translate-y-full"
        >
          <Marker :score="riscScore" />
        </div>
        <div
          class="w-full h-[15px] rounded-app-big bg-linear-to-r from-gradient-red from-50% to-gradient-orange"
        />
        <Typography class="text-primary-300 text-center">Decline</Typography>
      </div>
      <div class="flex-1 flex flex-col items-center gap-7">
        <div
          v-if="riscScore && (riscScore as RiscScore) === 'high'"
          class="absolute top-0 -translate-y-full"
        >
          <Marker :score="riscScore" />
        </div>
        <div
          class="w-full h-[15px] rounded-app-big bg-linear-to-r from-gradient-orange from-50% to-gradient-yellow"
        />
        <Typography class="text-primary-300 text-center">High Risk</Typography>
      </div>
      <div class="flex-1 flex flex-col items-center gap-7">
        <div
          v-if="riscScore && (riscScore as RiscScore) === 'medium'"
          class="absolute top-0 -translate-y-full"
        >
          <Marker :score="riscScore" />
        </div>
        <div
          class="w-full h-[15px] rounded-app-big bg-linear-to-r from-gradient-yellow from-50% to-gradient-lightgreen"
        />
        <Typography class="text-primary-300 text-center"
          >Medium Risk</Typography
        >
      </div>
      <div class="flex-1 flex flex-col items-center gap-7">
        <div
          v-if="riscScore && (riscScore as RiscScore) === 'low'"
          class="absolute -top-0 -translate-y-full"
        >
          <Marker :score="riscScore" />
        </div>
        <div
          class="w-full h-[15px] rounded-app-big bg-linear-to-r from-gradient-lightgreen to-gradient-green to-50%"
        />
        <Typography class="text-primary-300 text-center">Low Risk</Typography>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Marker from '~/components/RiscScore/Marker.vue'

export type RiscScore = 'low' | 'medium' | 'high' | 'declined'

const riscScore = defineModel<RiscScore | null>()
</script>

<style scoped></style>
