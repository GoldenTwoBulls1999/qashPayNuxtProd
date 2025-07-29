<template>
  <section
    class="bg-secondary-400 -mx-10 md:-mx-[calc((100vw-100%)/2)] md:bg-primary-500 md:flex md:justify-center md:items-center px-10 pt-18 pb-app-default md:py-70"
  >
    <div
      class="flex flex-col md:flex-row md:w-full md:max-w-[1274px] md:max-h-[637px] md:rounded-app-big overflow-hidden"
    >
      <div
        class="md:min-w-1/2 md:bg-secondary-400 md:flex md:items-center md:justify-center md:px-25 md:bg-[url(/img/contacts_mask.png)] md:bg-cover"
      >
        <Typography
          size="heading-2"
          weight="medium"
          class="mb-28 md:text-center"
        >
          <span class="font-light">Start streamlining</span>
          <br />
          your payments today
        </Typography>
      </div>

      <div class="md:min-w-1/2 md:bg-white md:px-25 lg:px-45 md:pt-49 md:pb-55">
        <ContactForm />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import ContactForm from '~/components/Home/ContactSection/ContactForm.vue'
</script>

<style scoped></style>
