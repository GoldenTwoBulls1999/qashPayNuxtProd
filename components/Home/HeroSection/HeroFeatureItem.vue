<template>
  <div class="flex items-center gap-4">
    <Icon mode="svg" name="app-icon:lock-icon-secondary" width="9" />
    <Typography
      size="inline-small"
      class="leading-100 opacity-75 max-[375px]:tracking-tighter whitespace-nowrap"
    >
      <slot />
    </Typography>
  </div>
</template>
