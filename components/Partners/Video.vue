<template>
  <div
    class="group w-full max-w-[420px] h-[208px] mx-auto flex justify-center items-center shadow-[8px_8px_16px_rgba(240,212,253,0.4)] rounded-app-big bg-secondary-300 mb-38 overflow-hidden relative"
    @click="playing = !playing"
  >
    <video ref="video" />
    <button
      ref="playPauseButton"
      type="button"
      class="absolute cursor-pointer flex justify-center items-center"
      :class="playing ? 'hidden group-hover:block' : 'block'"
    >
      <NuxtImg
        preload
        src="/img/partner_play_button.png"
        class="w-full w-[55px] h-[55px]"
        :class="playing ? 'hidden' : 'block'"
        format="webp"
      />
    </button>
  </div>
</template>

<script setup lang="ts">
import { useMediaControls } from '@vueuse/core'

const playPauseButton = ref<HTMLButtonElement>()
const video = useTemplateRef<HTMLVideoElement>('video')

const { playing } = useMediaControls(video, {
  src: '/img/QashPay.mp4',
})
</script>

<style scoped></style>
