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
    <slot v-if="!loading" />
  </button>
</template>

<script setup lang="ts">
interface ButtonProps {
  type?: 'button' | 'submit'
  variant?: 'primary' | 'outline' | 'text'
  size?: 'small' | 'large'
  disabled?: boolean
  loading?: boolean
  to?: string
  class?: string
  underline?: boolean
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
  'max-h-fit border-1 border-primary-500 text-center rounded-lg font-normal transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:cursor-pointer hover:bg-secondary-500 hover:border-secondary-500 focus:ring-1 focus:ring-secondary-500'

const variantClasses = computed(() => {
  const classes = {
    primary: 'bg-primary-500 text-white',
    outline: 'bg-white text-primary-500 hover:text-white',
    text: 'p-0! border-none hover:bg-transparent focus:ring-0! focus:text-secondary-500 bg-transparent hover:text-secondary-500',
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
    large: 'text-body-large leading-body-large px-15 py-8',
  }
  return classes[props.size]
})

const computedClasses = computed(() => {
  return [
    props.class,
    baseClasses,
    variantClasses.value,
    sizeClasses.value,
    underlineClasses.value,
  ].join(' ')
})
</script>
