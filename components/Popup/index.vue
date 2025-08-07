<template>
  <Teleport to="body" class="relative">
    <div v-if="open">
      <div
        v-show="withBackdrop"
        class="fixed inset-0 h-full z-100 bg-gray-900/90"
        @click="handleClose"
      >
        <div
          class="absolute bg-white rounded-app-big aspect-video w-full max-h-fit top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
          style="max-width: min(95vw, 992px)"
          @click.stop
        >
          <PartnersVideo src="/img/QashPay_main.mp4" :auto="true" />
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import PartnersVideo from '~/components/Partners/Video.vue'

interface PopupProps {
  open: boolean
  handleClose: () => void
  withBackdrop?: boolean
}

withDefaults(defineProps<PopupProps>(), {
  withBackdrop: true,
})
</script>

<style scoped></style>
