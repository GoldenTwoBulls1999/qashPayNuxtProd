<template>
  <footer class="bg-primary-500 text-white pt-16 pb-10 px-10">
    <div
      class="pb-12 grid gap-y-12 justify-between content-between grid-cols-[repeat(2,_min-content))] grid-rows-[repeat(3,_min-content))] md:grid-cols-[min-content_minmax(150px,_224px)_repeat(3,_minmax(120px,_180px))] md:grid-rows-[repeat(2,min-content)]"
    >
      <NuxtImg
        src="/img/logo_white.png"
        alt="Qashpay Logo"
        width="146"
        class="mb-15 mr-12 min-w-[146px]"
        loading="lazy"
        format="webp"
      />

      <div class="flex flex-col max-md:row-start-2">
        <Typography size="inline-small" class="tracking-app-default mb-1">
          Services
        </Typography>
        <NuxtLink
          v-for="(item, index) in headerItems[0].items"
          :key="index"
          :to="item.link"
          class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
        >
          <Typography
            size="inline-small"
            class="opacity-60 tracking-app-default"
          >
            {{ item.label }}
          </Typography>
        </NuxtLink>
      </div>
      <div class="hidden sm:flex flex-col max-md:row-start-2">
        <Typography size="inline-small" class="tracking-app-default mb-1">
          Resources
        </Typography>
        <NuxtLink
          v-for="(item, index) in headerItems[1].items"
          :key="index"
          :to="item.link"
          class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
        >
          <Typography
            size="inline-small"
            class="opacity-60 tracking-app-default"
          >
            {{ item.label }}
          </Typography>
        </NuxtLink>
      </div>
      <div class="hidden sm:flex flex-col max-md:row-start-2">
        <Typography size="inline-small" class="tracking-app-default mb-1">
          Policies
        </Typography>
        <NuxtLink
          to="/privacy-policy"
          class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
        >
          <Typography
            size="inline-small"
            class="opacity-60 tracking-app-default"
          >
            Privacy Policy
          </Typography>
        </NuxtLink>
        <NuxtLink
          to="/terms-of-use"
          class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
        >
          <Typography
            size="inline-small"
            class="opacity-60 tracking-app-default"
          >
            Terms of Use
          </Typography>
        </NuxtLink>
      </div>
      <div class="hidden sm:flex flex-col max-md:row-start-2">
        <Typography size="inline-small" class="tracking-app-default mb-1">
          Contact
        </Typography>
        <NuxtLink
          to="mailto:contact@quaife.net"
          class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
        >
          <Typography
            size="inline-small"
            class="opacity-60 tracking-app-default"
          >
            contact@quaife.net
          </Typography>
        </NuxtLink>
        <NuxtLink
          to="tel:+44-330-043-1516"
          class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
        >
          <Typography
            size="inline-small"
            class="opacity-60 tracking-app-default"
          >
            +44 330 043 1516
          </Typography>
        </NuxtLink>
      </div>
      <div class="sm:hidden flex flex-col gap-14 col-start-2 row-start-2">
        <div class="flex flex-col max-md:col-start-2 max-md:row-start-2">
          <Typography size="inline-small" class="tracking-app-default mb-1">
            Resources
          </Typography>
          <NuxtLink
            to="#"
            class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
          >
            <Typography
              size="inline-small"
              class="opacity-60 tracking-app-default"
            >
              Support
            </Typography>
          </NuxtLink>
          <NuxtLink
            to="#"
            class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
          >
            <Typography
              size="inline-small"
              class="opacity-60 tracking-app-default"
            >
              Documentation
            </Typography>
          </NuxtLink>
          <NuxtLink
            to="#"
            class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
          >
            <Typography
              size="inline-small"
              class="opacity-60 tracking-app-default"
            >
              User Pricing
            </Typography>
          </NuxtLink>
        </div>
        <div class="flex flex-col max-md:col-start-2 max-md:row-start-3">
          <Typography size="inline-small" class="tracking-app-default mb-1">
            Policies
          </Typography>
          <NuxtLink
            to="/privacy-policy"
            class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
          >
            <Typography
              size="inline-small"
              class="opacity-60 tracking-app-default"
            >
              Privacy Policy
            </Typography>
          </NuxtLink>
          <NuxtLink
            to="/terms-of-use"
            class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
          >
            <Typography
              size="inline-small"
              class="opacity-60 tracking-app-default"
            >
              Terms of Use
            </Typography>
          </NuxtLink>
        </div>
        <div class="flex flex-col max-md:col-start-2 max-md:row-start-4">
          <Typography size="inline-small" class="tracking-app-default mb-1">
            Contact
          </Typography>
          <NuxtLink
            to="mailto:contact@quaife.net"
            class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
          >
            <Typography
              size="inline-small"
              class="opacity-60 tracking-app-default"
            >
              contact@quaife.net
            </Typography>
          </NuxtLink>
          <NuxtLink
            to="tel:+44-330-043-1516"
            class="hover:text-secondary-500 transition-all duration-200 max-w-fit"
          >
            <Typography
              size="inline-small"
              class="opacity-60 tracking-app-default"
            >
              +44 330 043 1516
            </Typography>
          </NuxtLink>
        </div>
      </div>

      <SocialLinks />
    </div>

    <div class="border-t-1 border-[#CACAD4] pt-8">
      <Typography
        size="inline-label"
        class="opacity-60 normal-case! leading-body-normal"
      >
        &copy;2024 Quaife.net Limited. All Rights Reserved.
        <br />
        Quaife.net Limited, a company incorporated in the UK under Company
        Number: 10318045
      </Typography>
    </div>
  </footer>
</template>

<script setup lang="ts">
import SocialLinks from '~/components/Footer/SocialLinks.vue'
</script>
