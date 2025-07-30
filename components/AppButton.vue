<template>
  <NuxtLink v-if="to" :to="to">
    <button
      v-bind="$attrs"
      type="button"
      :disabled="disabled"
      :class="computedClasses"
    >
      <slot />
    </button>
  </NuxtLink>
  <button
    v-else
    v-bind="$attrs"
    :type="type"
    :disabled="disabled"
    :class="computedClasses"
    @click="handleClick"
  >
    <span
      v-if="loading"
      class="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"
    />
    <slot name="icon:start" />
    <slot v-if="!loading" />
    <slot name="icon:end" />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline' | 'text'
  size?: 'small' | 'large' | 'smallrounded6'
  disabled?: boolean
  loading?: boolean
  to?: string
  class?: string
  underline?: boolean
  color?: 'white' | 'black' | 'pink'
}

const props = withDefaults(defineProps<ButtonProps>(), {
  type: 'button',
  variant: 'primary',
  size: 'large',
  disabled: false,
  loading: false,
  to: '',
  class: '',
  underline: true,
  color: 'white',
})

const emit = defineEmits<{
  click: [event: Event]
}>()

const handleClick = (event: Event) => {
  if (props.disabled || props.loading) {
    event.preventDefault()
    return
  }
  emit('click', event)
}

const baseClasses =
  'text-center rounded-lg font-normal transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer flex items-center justify-center gap-[5px] max-h-[51px]'

const variantClasses = computed(() => {
  const classes = {
    primary: 'text-white',
    outline: 'border-1 border-primary-500 text-primary-500',
    text: 'p-0! border-none hover:bg-transparent focus:ring-0!',
  }
  return classes[props.variant]
})

const underlineClasses = computed(() => {
  return props.underline && props.variant === 'text' ?
      'underline underline-offset-16'
    : ''
})

const sizeClasses = computed(() => {
  const classes = {
    small: 'text-body-normal leading-body-normal rounded-[10px]! px-10 py-5',
    smallrounded6: 'text-body-normal leading-body-normal rounded-[6px]! px-10 py-5',
    large: 'text-body-large leading-body-large px-15 py-8',
  }
  return classes[props.size]
})

const colorClasses = computed(() => {
  const classes = {
    white: '',
    black: 'border-1 border-primary-500 bg-black hover:bg-gray-700 focus:bg-gray-500',
    pink: 'border-1 border-pink-500 bg-pink-500 hover:bg-pink-400 focus:bg-pink-300',
  }
  return classes[props.color]
})

const computedClasses = computed(() => {
  return [
    props.class,
    baseClasses,
    variantClasses.value,
    sizeClasses.value,
    underlineClasses.value,
    colorClasses.value,
  ].join(' ')
})
</script>
