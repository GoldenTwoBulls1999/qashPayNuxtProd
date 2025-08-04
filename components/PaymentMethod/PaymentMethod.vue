<template>
  <div v-if="methodName" class="flex items-center gap-8">
    <Icon
      mode="svg"
      width="47"
      height="32"
      :name="`payment-method:${methodName.replaceAll(' ', '')}`"
    />
    <Typography weight="medium" class="text-gray-500">
      {{ methodName }}
    </Typography>
  </div>
</template>

<script setup lang="ts">
interface PaymentMethodProps {
  methodName: string
}

defineProps<PaymentMethodProps>()
</script>
