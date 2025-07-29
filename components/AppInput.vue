<template>
  <div class="w-full relative">
    <label v-if="label" :for="inputId" class="inline-block mb-[7px]">
      <Typography
        class="text-primary-400"
        :class="{
          'text-red-500': isError,
          'max-md:text-primary-500': !isError && route.path === '/',
        }"
      >
        {{ label }}
      </Typography>
    </label>
    <div class="relative">
      <div ref="startIconRef" class="absolute left-8 top-1/2 -translate-y-1/2">
        <slot name="startIcon" />
      </div>
      <input
        type="text"
        class="w-full border-1 border-gray-400 bg-white rounded-lg text-body-large leading-[21px] text-gray-500 py-[14.5px] placeholder:text-gray-500 focus:outline-none focus:ring-1 focus:ring-secondary-500"
        v-model="inputModel"
        v-bind="inputAttrs"
        :id="inputId"
        :placeholder="placeholder"
        :inputmode="numeric ? 'decimal' : 'text'"
        :pattern="numeric ? '^(0|[1-9]\d*)(\.\d*)?$' : undefined"
        :class="{
          'text-red-500 border-red-500': isError,
          'max-md:border-primary-400': !isError && route.path === '/',
        }"
        :style="{
          'padding-left': hasStartIcon ? startIconWidth + 'px' : '16px',
          'padding-right': hasEndIcon ? endIconWidth + 'px' : '16px',
        }"
        @beforeinput="blockInvalidInput"
      />
      <div ref="endIconRef" class="absolute right-8 top-1/2 -translate-y-1/2">
        <slot name="endIcon" />
      </div>
    </div>
    <Typography
      v-if="isError"
      size="inline-small"
      class="absolute text-red-500"
    >
      {{ error }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
import { computed, useId, useSlots } from 'vue'
import { useRoute } from 'vue-router'

interface InputProps {
  label?: string
  isError?: boolean
  error?: string
  placeholder?: string
  numeric?: boolean
  inputAttrs?: Record<string, any>
}

const props = withDefaults(defineProps<InputProps>(), {
  label: '',
  isError: false,
  error: '',
  placeholder: '',
  numeric: false,
  inputAttrs: () => ({}),
})

const inputId = useId()
const slots = useSlots()
const route = useRoute()

const inputModel = defineModel()

const startIconRef = ref<HTMLElement | null>(null)
const endIconRef = ref<HTMLElement | null>(null)
const startIconWidth = ref(0)
const endIconWidth = ref(0)

onMounted(async () => {
  await nextTick()
  if (!!slots.startIcon && startIconRef.value) {
    startIconWidth.value = startIconRef.value.getBoundingClientRect().width + 32
  }
  if (!!slots.endIcon && endIconRef.value) {
    endIconWidth.value = endIconRef.value.getBoundingClientRect().width + 32
  }
})

const hasStartIcon = computed(() => {
  return !!slots.startIcon
})

const hasEndIcon = computed(() => {
  return !!slots.endIcon
})

const blockInvalidInput = (e: Event) => {
  const inputEvent = e as InputEvent

  if (inputEvent.inputType.startsWith('delete') || inputEvent.data === null)
    return

  const target = inputEvent.target as HTMLInputElement
  const currentValue = target.value
  const selectionStart = target.selectionStart ?? currentValue.length
  const selectionEnd = target.selectionEnd ?? currentValue.length

  const nextValue =
    currentValue.slice(0, selectionStart) +
    inputEvent.data +
    currentValue.slice(selectionEnd)

  const regex = /^(0|[1-9]\d*)(\.\d*)?$/

  if (props.numeric && !regex.test(nextValue)) {
    inputEvent.preventDefault()
  }
}
</script>
