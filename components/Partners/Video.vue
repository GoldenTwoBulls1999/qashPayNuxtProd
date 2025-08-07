<template>
  <div
    class="group w-full max-h-fit mx-auto flex justify-center items-center rounded-app-big overflow-hidden relative"
  >
    <div class="bg-[#C1B7DA]/10 absolute inset-0 z-10" />
    <div class="test aspect-video">
      <video ref="videoRef" class="test w-full max-w-full max-h-fit m-auto" />
    </div>
    <AppButton
      size="smallrounded6"
      class="z-10 group absolute bottom-12 left-12 text-inline-label flex items-center !gap-6 bg-white hover:bg-[#C1B7DA]/40 focus:bg-white focus:!text-primary-400 !text-primary-300 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
      @click="togglePlay"
    >
      {{ isPlaying ? 'Pause the video' : 'Watch the video' }}
      <template #icon:end>
        <Icon
          v-if="isPlaying"
          mode="svg"
          name="app-icon:pause-icon"
          class="text-primary-200 group-focus:text-primary-400"
        />
        <Icon
          v-else
          mode="svg"
          name="app-icon:play-icon"
          class="text-primary-200 group-focus:text-primary-400"
        />
      </template>
    </AppButton>
    <AppButton
      class="z-10 absolute bottom-12 right-12 bg-primary-300 opacity-40 hover:opacity-80 hover:!bg-primary-300 focus:opacity-100 focus:!bg-primary-300 !text-primary-300 !rounded-full !w-16 !h-16 !max-w-16 !max-h-16 !p-0"
      @click="toggleMute"
    >
      <template #icon:end>
        <Icon v-if="isMuted" mode="svg" width="19" name="app-icon:mute-icon" />
        <Icon v-else mode="svg" width="19" name="app-icon:unmute-icon" />
      </template>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useElementVisibility, useMediaQuery } from '@vueuse/core'
import videojs from 'video.js'
import 'video.js/dist/video-js.css'
import type Player from 'video.js/dist/types/player'

interface VideoProps {
  src: string
  auto?: boolean
}

const { src, auto } = defineProps<VideoProps>()

let player: Player | null = null
const videoRef = ref<HTMLVideoElement | null>(null)
const isPlaying = ref(false)
const isMuted = ref(false)
const userControlled = ref(false)

const visible = useElementVisibility(videoRef)
const isDesktop = useMediaQuery('(min-width: 768px)')

const togglePlay = () => {
  if (!player) return
  if (player.paused()) {
    player.play()
  } else {
    player.pause()
  }
  userControlled.value = true
}

const toggleMute = () => {
  if (!player) return
  const muted = !player.muted()
  player.muted(muted)
  isMuted.value = muted
}

onMounted(() => {
  player = videojs(videoRef.value as Element, {
    controls: false,
    autoplay: auto || isDesktop.value,
    preload: 'auto',
    preloadTextTracks: false,
    muted: true,
    sources: [
      {
        src,
        type: 'video/webm',
      },
    ],
  })

  player.on('play', () => {
    isPlaying.value = true
  })

  player.on('pause', () => {
    isPlaying.value = false
  })

  isMuted.value = true
})

watch(visible, (isVisible) => {
  if (!userControlled.value && isDesktop.value) {
    isPlaying.value = isVisible
  }
})

onBeforeUnmount(() => {
  if (player) {
    player.dispose()
    player = null
  }
})
</script>

<style>
.vjs-text-track-display {
  display: none !important;
}

.vjs-loading-spinner {
  display: none !important;
}

.test {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
}

.test > *:not(button) {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
