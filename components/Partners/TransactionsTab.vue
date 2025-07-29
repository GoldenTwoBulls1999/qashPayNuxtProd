<template>
  <div class="flex flex-col md:flex-row gap-5 md:gap-30">
    <div class="flex-2">
      <NuxtImg
        preload
        src="/img/partner_tab_1.png"
        alt="item.imageAlt"
        class="w-full md:max-w-[610px] md:-ml-10"
        format="webp"
      />
    </div>

    <div class="flex-1 flex flex-col px-10 md:mt-25 md:pr-10 md:pl-0">
      <Typography class="mb-11">
        View your commission to date and projected monthly revenue. Profit
        insights are available at the Acquirer, card scheme, and merchant
        levels.
      </Typography>
      <ul class="list-[square] pl-9">
        <li>
          <Typography>Transaction count</Typography>
        </li>
        <li>
          <Typography>Volume Agent</Typography>
        </li>
        <li>
          <Typography>Agent commission</Typography>
        </li>
        <li>
          <Typography>Commission linear projection</Typography>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
