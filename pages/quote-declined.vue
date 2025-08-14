<template>
  <section
      class="w-full pt-19 pb-69 pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center"
  >
    <div class="md:min-w-[728px] flex flex-col">
      <Typography size="heading-4" weight="medium" class="mb-36 flex justify-center text-center">
        We Understand — And We’re Still Here for You
      </Typography>
      <div
          class="w-full max-h-fit flex flex-col border-1 border-gray-border rounded-app-big px-20 pt-15 pb-20"
      >
        <Typography size="body-large" class="mb-15">Thanks for letting us know our quote isn’t the right fit right now.</Typography>
        <Typography size="body-large" class="mb-15">
          Your business needs come first, and we respect your decision.
          If things change in the future — whether your budget, priorities, or timing — we’d be happy to revisit your
          options and create a solution that works better for you.
        </Typography>
        <Typography size="body-large">
          In the meantime, you’re always welcome to:
        </Typography>
        <Typography size="body-large" weight="bold" class="pl-5">▪ Request a new quote at any time</Typography>
        <Typography size="body-large" weight="bold" class="pl-5">▪ Explore our other services that might better fit your needs</Typography>
        <Typography size="body-large" weight="bold" class="pl-5">▪ Reach out with questions — no strings attached</Typography>
        <Typography size="body-large" class="mt-15">Your success is what matters most, and we’d love to stay connected.</Typography>
        <Typography size="body-large" class="mt-15">If you have any questions please contact us at:
          <NuxtLink href="mailto:contact@qashpay.com" class="text-secondary-500">
            contact@qashpay.com
          </NuxtLink>
        </Typography>
      </div>
      <div class="flex justify-center mt-[74px]">
        <NuxtLink to="/">
          <AppButton color="black">
            Visit Homepage
          </AppButton>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
</script>