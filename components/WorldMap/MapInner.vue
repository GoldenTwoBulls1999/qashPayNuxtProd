<script setup lang="ts">
import { mapInfo } from '~/utils/mapInfo'

const selected = defineModel<string>()
const locations: { name: string; id: string; path: string }[] =
  mapInfo.locations
</script>

<template>
  <svg :viewBox="mapInfo.viewBox" class="w-full h-auto world-map">
    <g v-for="loc in locations" :key="loc.id">
      <path
        :d="loc.path"
        :aria-label="loc.name"
        class="cursor-pointer transition-all duration-200"
        :class="{
          'fill-map-primary-light': loc.id !== (selected as string),
          'fill-secondary-500': loc.id === (selected as string),
          'hover:fill-secondary-400': loc.id !== (selected as string),
        }"
        @click="selected = loc.id"
      />
    </g>
  </svg>
</template>

<style scoped>
.world-map path {
  stroke: #fff;
  stroke-width: 1;
}
</style>
