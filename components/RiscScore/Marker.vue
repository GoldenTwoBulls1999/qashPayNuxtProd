<template>
  <div
    class="shadow-marker relative w-20 h-20 rounded-tl-[50%] rounded-tr-[50%] rounded-br-[0%] rounded-bl-[50%] bg-linear-262 from-white from-20% to-[#efedf2] to-90% rotate-45"
  >
    <div
      class="w-7 h-7 absolute rounded-full top-1/2 left-1/2 -translate-1/2"
      :class="{
        'bg-gradient-green': score === 'low',
        'bg-gradient-yellow': score === 'medium',
        'bg-gradient-orange': score === 'high',
        'bg-gradient-red': score === 'declined',
      }"
    />
  </div>
</template>

<script setup lang="ts">
import type { RiscScore } from '~/components/RiscScore/index.vue'

defineProps<{ score: RiscScore }>()
</script>
