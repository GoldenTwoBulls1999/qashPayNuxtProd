<template>
  <Teleport to="body" class="relative">
    <div v-if="open">
      <div
        v-show="withBackdrop"
        class="fixed inset-0 h-full z-100 bg-gray-900/90"
        @click="handleClose"
      >
        <div
          class="absolute rounded-app-big w-full max-h-fit top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 px-10"
          style="max-width: 992px"
          @click.stop
        >
          <Video :src-mp4="videoSrcMp4" :src-webm="videoSrcWebm" :autoplay="true" :is-muted="false" :native-player="true" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import Video from '~/components/Partners/Video.vue'

interface PopupProps {
  open: boolean
  handleClose: () => void
  withBackdrop?: boolean,
  videoSrcMp4: string,
  videoSrcWebm: string
}

withDefaults(defineProps<PopupProps>(), {
  withBackdrop: true,
})
</script>

<style scoped></style>
