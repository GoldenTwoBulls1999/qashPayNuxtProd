<template>
  <div
    class="group w-full mx-auto flex justify-center items-center rounded-app-big overflow-hidden relative"
  >
    <video ref="video" class="w-full mx-auto" />
    <button
      type="button"
      class="absolute bottom-4 right-4 w-[32px] h-[32px] bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition"
      @click.stop="muted = !muted"
    >
      <Icon v-if="muted" mode="svg" name="app-icon:mute" />
      <Icon v-if="!muted" mode="svg" name="app-icon:unmute" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMediaControls, useElementVisibility } from '@vueuse/core'
import { watch } from 'vue'

const video = useTemplateRef<HTMLVideoElement>('video')

const { playing, muted, volume } = useMediaControls(video, {
  src: '/img/QashPay.webm',
})

onMounted(() => {
  muted.value = true
})

const visible = useElementVisibility(video)

watch(visible, (isVisible) => {
  if (isVisible) {
    playing.value = true
  } else {
    playing.value = false
  }
})
</script>

<style scoped></style>
