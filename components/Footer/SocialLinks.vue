<template>
  <div
    class="flex flex-col row-start-3 sm:col-start-4 md:row-start-2 md:col-start-5"
  >
    <Typography size="inline-small" class="tracking-app-default mb-6">
      Social Media
    </Typography>
    <ul class="flex gap-6">
      <li>
        <NuxtLink to="https://www.linkedin.com/company/108289234">
          <Icon
            mode="svg"
            width="16"
            height="16"
            name="app-icon:linkedin-icon"
            class="fill-white hover:fill-secondary-500 transition-all duration-200"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          <Icon
            mode="svg"
            width="16"
            height="16"
            name="app-icon:x-icon"
            class="fill-white hover:fill-secondary-500 transition-all duration-200"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          <Icon
            mode="svg"
            width="16"
            height="16"
            name="app-icon:facebook-icon"
            class="fill-white hover:fill-secondary-500 transition-all duration-200"
          />
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="#">
          <Icon
            mode="svg"
            width="16"
            height="16"
            name="app-icon:instagram-icon"
            class="fill-white hover:fill-secondary-500 transition-all duration-200"
          />
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>
<script setup lang="ts"></script>
