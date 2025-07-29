<template>
  <component
    :is="elementFromProps"
    :class="[
      computedClasses,
      {
        uppercase: size === 'inline-label',
      },
    ]"
  >
    <slot />
  </component>
</template>

<script setup lang="ts">
type Weight = 'light' | 'normal' | 'medium'
type Size =
  | 'heading-1'
  | 'heading-2'
  | 'heading-3'
  | 'heading-4'
  | 'heading-5'
  | 'heading-6'
  | 'body-normal'
  | 'body-large'
  | 'inline-small'
  | 'inline-label'

interface TypographyProps {
  weight?: Weight
  size?: Size
  class?:
    | string
    | Record<string, boolean>
    | (string | Record<string, boolean>)[]
}

const props = withDefaults(defineProps<TypographyProps>(), {
  weight: 'normal',
  size: 'body-normal',
  class: '',
})

const elementFromProps = computed(() => {
  if (props.size.startsWith('heading')) {
    return `h${props.size.at(-1)}`
  }
  if (props.size.startsWith('body')) {
    return 'p'
  }
  return 'span'
})

const sizeClass = computed(() => {
  const classes = {
    'heading-1': 'text-heading-1',
    'heading-2': 'text-heading-2',
    'heading-3': 'text-heading-3',
    'heading-4': 'text-heading-4',
    'heading-5': 'text-heading-5',
    'heading-6': 'text-heading-6',
    'body-normal': 'text-body-normal',
    'body-large': 'text-body-large',
    'inline-small': 'text-inline-small',
    'inline-label': 'text-inline-label',
  }
  return classes[props.size]
})

const weightClass = computed(() => {
  const classes = {
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
  }
  return classes[props.weight]
})

const computedClasses = computed(() => {
  return [sizeClass.value, weightClass.value, props.class].join(' ')
})
</script>
