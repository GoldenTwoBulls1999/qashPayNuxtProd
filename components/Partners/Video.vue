<template>
  <div
    class="group w-full max-h-fit mx-auto flex justify-center items-center rounded-app-big overflow-hidden relative"
  >
    <div class="bg-[#C1B7DA]/10 absolute inset-0 z-10" />
    <div class="player aspect-video">
      <video
        ref="videoRef"
        class="w-full max-w-full max-h-fit m-auto"
        preload="auto"
        poster=""
        playsinline
      />
    </div>
    <AppButton
      size="smallrounded6"
      class="z-10 group absolute bottom-12 left-12 text-inline-label flex items-center !gap-6 bg-white hover:bg-[#C1B7DA]/40 focus:bg-white focus:!text-primary-400 !text-primary-300 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
      @click="togglePlay"
    >
      {{ playing ? 'Pause the video' : 'Watch the video' }}
      <template #icon:end>
        <Icon
          v-if="playing"
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
        <Icon v-if="muted" mode="svg" width="19" name="app-icon:mute-icon" />
        <Icon v-else mode="svg" width="19" name="app-icon:unmute-icon" />
      </template>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue'
import {
  useMediaControls,
  useElementVisibility,
  useMediaQuery,
} from '@vueuse/core'

interface VideoProps {
  src: string
  autoplay?: boolean
}

const { src, autoplay } = defineProps<VideoProps>()

const videoRef = ref<HTMLVideoElement | null>(null)
const userControlled = ref(false)

const visible = useElementVisibility(videoRef)
const isDesktop = useMediaQuery('(min-width: 768px)')
const { playing, muted } = useMediaControls(videoRef, {
  src,
})

const togglePlay = () => {
  playing.value = !playing.value
  userControlled.value = true
}

const toggleMute = () => {
  muted.value = !muted.value
}

watch(visible, (isVisible) => {
  if (!userControlled.value && isDesktop.value) {
    playing.value = isVisible
  }
})

onMounted(() => {
  muted.value = true
  playing.value = autoplay || isDesktop.value
})
</script>

<style>
.player {
  position: relative;
  width: 100%;
  padding-top: 56.25%;
  overflow: hidden;
}

.player > * {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}
</style>
