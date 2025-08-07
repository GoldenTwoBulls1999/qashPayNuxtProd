<template>
  <div
    class="group w-full mx-auto flex justify-center items-center rounded-app-big overflow-hidden relative"
  >
    <div class="bg-[#C1B7DA]/10 absolute inset-0" />
    <video ref="video" class="w-full mx-auto" />
    <AppButton
      size="smallrounded6"
      class="group absolute bottom-12 left-12 text-inline-label flex items-center !gap-6 bg-white hover:bg-[#C1B7DA]/40 focus:bg-white focus:!text-primary-400 !text-primary-300 shadow-[0px_4px_4px_rgba(0,0,0,0.05)]"
      @click="toggleVideo"
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
      class="absolute bottom-12 right-12 bg-primary-300 opacity-40 hover:opacity-80 hover:!bg-primary-300 focus:opacity-100 focus:!bg-primary-300 !text-primary-300 !rounded-full !w-16 !h-16 !max-w-16 !max-h-16 !p-0"
      @click="muted = !muted"
    >
      <template #icon:end>
        <Icon v-if="muted" mode="svg" width="19" name="app-icon:mute-icon" />
        <Icon v-else mode="svg" width="19" name="app-icon:unmute-icon" />
      </template>
    </AppButton>
  </div>
</template>

<script setup lang="ts">
import { useMediaControls, useElementVisibility } from '@vueuse/core'
import { watch } from 'vue'

const { src } = defineProps(['src'])

const userControlled = ref(false)
const video = useTemplateRef<HTMLVideoElement>('video')

const visible = useElementVisibility(video)
const { playing, muted } = useMediaControls(video, {
  src: src,
})

const toggleVideo = () => {
  playing.value = !playing.value
  userControlled.value = true
}

watch(visible, (isVisible) => {
  playing.value = isVisible && !userControlled.value
})

onMounted(() => {
  muted.value = true
  playing.value = true
})
</script>

<style scoped></style>
