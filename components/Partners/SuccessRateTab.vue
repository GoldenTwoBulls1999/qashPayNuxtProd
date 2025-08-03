<template>
  <div class="flex flex-col md:flex-row gap-5 md:gap-30">
    <div class="flex-2">
      <NuxtImg
        preload
        src="/img/partner_tab_2.png"
        alt="item.imageAlt"
        class="w-full md:max-w-[610px] md:-ml-10"
        format="png"
      />
    </div>
    <div class="flex-1 flex flex-col px-10 md:mt-25 md:pr-10 md:pl-0">
      <Typography class="mb-11">
        Take a proactive approach with your merchants.
      </Typography>
      <Typography class="mb-11">
        Track their success rates, identify rejection reasons, and see which
        BINs are outperforming others.
      </Typography>
      <Typography class="mb-11">
        Merchant expected processing data lets you monitor which merchants are
        meeting their forecasted processing volumes.
      </Typography>
      <ul class="list-[square] pl-9">
        <li>
          <Typography>Success Ratio</Typography>
        </li>
        <li>
          <Typography>Expected Processing</Typography>
        </li>
        <li>
          <Typography>Delines counts, ratio and description</Typography>
        </li>
        <li>
          <Typography>Card BIN Rejections</Typography>
        </li>
        <li>
          <Typography>MCC Success Rates</Typography>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
