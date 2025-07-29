<template>
  <div
    class="border-1 border-border-gray rounded-2xl p-12 flex flex-col gap-8 md:flex-row md:gap-12"
    :class="{
      'shadow-benefit': withShadow,
    }"
  >
    <div
      class="w-[54px] h-[54px] min-w-[54px] min-h-[54px] p-4 rounded-[10px] flex items-center justify-center"
      :class="iconColor === 'secondary' ? 'bg-secondary-300' : 'bg-primary-100'"
    >
      <Icon mode="svg" width="26" height="26" :name="`app-icon:${icon}`" />
    </div>
    <div class="flex flex-col gap-5">
      <Typography size="heading-6">{{ title }}</Typography>
      <Typography class="text-text-primary-light">
        <slot />
      </Typography>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  icon: string
  iconColor?: 'secondary' | 'gray'
  withShadow?: boolean
}

withDefaults(defineProps<Props>(), {
  iconColor: 'secondary',
  withShadow: false,
})
</script>
