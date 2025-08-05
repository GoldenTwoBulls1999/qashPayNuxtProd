<template>
  <section class="w-full pt-first-top-gap pb-200 @container/main">
    <div class="max-h-fit flex flex-col">
      <div class="flex-1 flex flex-col items-center">
        <Typography
          size="heading-4"
          weight="medium"
          class="w-full max-w-[500px] text-center max-md:text-mobile-heading-2 mb-20"
        >
          Thank You for Your Interest in Partnering With Us!
        </Typography>

        <Typography
          size="heading-6"
          class="w-full max-w-[650px] text-center max-md:text-mobile-heading-6 mb-60"
        >
          We're excited to have you take the first step toward becoming a valued
          partner.
        </Typography>

        <div
          class="w-full max-w-[768px] max-h-fit flex flex-col border-1 border-gray-border rounded-app-big px-10 py-11"
        >
          <Typography size="body-large" class="mb-10">
            You should receive an email shortly with access to our Agent
            Onboarding Portal, where you can complete the next steps of the
            process.
            <span class="font-bold">
              If you don’t see the email within a few minutes, please check your
              spam or junk folder.
            </span>
          </Typography>
          <Typography size="body-large">
            If you have any questions in the meantime, feel free to contact us
            at
            <NuxtLink
              to="mailto:support@qashpay.com"
              class="text-secondary-500"
            >
              support@qashpay.com.
            </NuxtLink>
          </Typography>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
