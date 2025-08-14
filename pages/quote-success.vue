<template>
  <section
    class="w-full pt-19 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center"
  >
    <div class="md:min-w-[728px] flex flex-col">
      <Typography size="heading-4" weight="medium" class="mb-36 flex justify-center text-center">
        Thanks for accepting your<br>merchant quote
      </Typography>
      <div
        class="w-full max-h-fit flex flex-col border-1 border-gray-border rounded-app-big px-20 pt-15 pb-20"
      >
        <Typography size="body-large">
          Look out for an email from us to start your onboarding.
          <br />
          If you have any questions please contact us at:
          <NuxtLink href="mailto:contact@qashpay.com" class="text-secondary-500">
            contact@qashpay.com
          </NuxtLink>
        </Typography>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>
