<template>
  <section
    class="w-full pt-19 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center"
  >
    <div
      class="w-full max-h-fit flex flex-col border-1 border-gray-border rounded-app-big px-10 py-11"
    >
      <Typography size="heading-3" weight="light" class="mb-60 md:mb-12">
        Thanks for accepting your merchant quote
      </Typography>
      <Typography size="body-large">
        Look out for an email from us to start your onboarding.
        <br />
        If you have any questions please contact us at:
        <NuxtLink href="mailto:contact@quaife.net" class="text-secondary-500">
          contact@quaife.net
        </NuxtLink>
      </Typography>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
