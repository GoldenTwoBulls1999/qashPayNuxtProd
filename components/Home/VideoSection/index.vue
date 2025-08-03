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

<template>
  <div class="pb-60">
    <div class="flex flex-col gap-10 md:items-center" style="margin-bottom: calc(var(--blocks-gap) / 2)">
      <Typography size="heading-2">Why top businesses choose QashPay</Typography>
      <Typography size="heading-5" class="max-w-[648px] text-center">
        A cutting-edge platform built to empower decision-making and transparency
      </Typography>
    </div>
    <div
    class="group w-full mx-auto flex justify-center items-center rounded-app-big bg-secondary-300 mb-38 overflow-hidden relative"
    >
      <video ref="video" class="w-full mx-auto"/>
      <button
          type="button"
          class="absolute bottom-4 right-4 w-[32px] h-[32px] bg-white/80 rounded-full flex items-center justify-center hover:bg-white transition"
          @click.stop="muted = !muted"
      >
        <Icon
            v-if="muted"
            mode="svg"
            name="app-icon:mute"
        />
        <Icon
            v-if="!muted"
            mode="svg"
            name="app-icon:unmute"
        />
      </button>
    </div>
  </div>
</template>

<style scoped>

</style>
