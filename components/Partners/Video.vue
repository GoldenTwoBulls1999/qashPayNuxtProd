<template>
  <div
      class="group w-[100vw] md:w-full -left-10 md:left-0 md:mx-auto flex justify-center items-center md:rounded-app-big overflow-hidden relative"
  >
    <div v-if="!nativePlayer" v-show="isLoaded" class="bg-[#C1B7DA]/10 absolute inset-0 z-10" />
    <div class="player aspect-video">
      <video
          ref="videoRef"
          class="w-full max-w-full max-h-fit m-auto"
          preload="auto"
          :poster="poster || ''"
          playsinline
          :controls="nativePlayer"
          :muted="isMuted ?? true"
          autoplay
          @loadeddata="onLoad"
          @webkitendfullscreen="onExitFullscreen"
      >
        <source :src="srcMp4" type="video/mp4">
        <source :src="srcWebm" type="video/webm">
      </video>
    </div>
    <AppButton
        v-if="!nativePlayer && shouldShowWatchButton"
        size="smallrounded6"
        class="z-10 group absolute bottom-12 left-12 text-inline-label flex items-center !gap-6 bg-white hover:bg-[#C1B7DA]/40 focus:bg-white focus:!text-primary-400 !text-primary-300 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
        :class="isDesktop ? 'hidden md:flex' : ''"
        @click="handleWatchVideo"
    >
      Watch the video
      <template #icon:end>
        <Icon
            mode="svg"
            width="10"
            name="app-icon:play-icon"
            class="text-primary-200 group-focus:text-primary-400 left-[1px] relative"
        />
      </template>
    </AppButton>
    <AppButton
        v-if="!nativePlayer"
        class="z-10 absolute bottom-12 right-12 bg-primary-300 opacity-40 hover:opacity-80 hover:!bg-primary-300 focus:opacity-100 focus:!bg-primary-300 !text-primary-300 !rounded-full !w-16 !h-16 !max-w-16 !max-h-16 !p-0"
        @click="togglePlay"
    >
      <template #icon:end>
        <Icon v-if="playing" mode="svg" width="12" name="app-icon:pause-icon" class="text-white" />
        <Icon v-else mode="svg" width="12" name="app-icon:play-icon" class="text-white relative left-[1px]" />
      </template>
    </AppButton>
  </div>
  <Popup :open="isVideoOpen" :handle-close="handleVideoClose" :video-src-mp4="srcMp4" :video-src-webm="srcWebm" />
</template>

<script setup lang="ts">
import { ref, onMounted, watch, computed } from 'vue'
import {
  useMediaControls,
  useElementVisibility,
  useMediaQuery,
  useScrollLock
} from '@vueuse/core'

interface VideoProps {
  srcMp4: string
  srcWebm: string
  autoplay?: boolean,
  poster?: string,
  isMuted?: boolean,
  nativePlayer?: boolean
}

const { srcMp4, srcWebm, autoplay, poster, isMuted } = defineProps<VideoProps>()

const videoRef = ref<HTMLVideoElement | null>(null)
const userControlled = ref(false)

const visible = useElementVisibility(videoRef)
const isDesktop = useMediaQuery('(min-width: 1024px)')
const { playing, muted } = useMediaControls(videoRef)
const isLoaded = ref(false)

const isIOSSafari = computed(() => {
  if (process.client) {
    const userAgent = navigator.userAgent
    const isIOS = /iPad|iPhone|iPod|Macintosh/.test(userAgent)
    const isSafari = /Safari/.test(userAgent) && !/CriOS|FxiOS|EdgiOS/.test(userAgent)
    return isIOS && isSafari
  }
  return false
})

const shouldShowWatchButton = computed(() => {
  return true
})

let scrollY = 0;

function lockBodyScroll() {
  scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function unlockBodyScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  window.scrollTo(0, scrollY);
}

const togglePlay = () => {
  playing.value = !playing.value
  userControlled.value = true
}

const onLoad = () => {
  isLoaded.value = true
}

const onExitFullscreen = () => {
  if (videoRef.value) {
    videoRef.value.muted = isMuted ?? true
    setTimeout(() => {
      videoRef.value?.play()
    }, 500)
  }
}

const isVideoOpen = ref(false)

const handleVideoClose = () => {
  unlockBodyScroll()
  isVideoOpen.value = false
}

const handleWatchVideo = () => {
  if (isIOSSafari.value && !isDesktop.value) {
    if (videoRef.value) {
      videoRef.value.muted = false
      videoRef.value.currentTime = 0
      videoRef.value.play()
      videoRef.value.webkitEnterFullscreen?.()
    }
  } else {
    lockBodyScroll()
    isVideoOpen.value = true
  }
}

onMounted(() => {
  const scrollLock = useScrollLock(document.body)

  watch(
      isVideoOpen,
      (val) => {
        scrollLock.value = val
      },
      { immediate: true }
  )
})

watch(visible, (isVisible) => {
  if (!userControlled.value && isDesktop.value) {
    playing.value = isVisible
  }
})

onMounted(() => {
  muted.value = isMuted ?? true
  playing.value = autoplay || visible.value
})

onUnmounted(() => {
  playing.value = false
  muted.value = true
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
