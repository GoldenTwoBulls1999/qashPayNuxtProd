<template>
  <div class="flex flex-col md:flex-row gap-5 md:gap-30">
    <div class="flex-2">
      <NuxtImg
        preload
        src="/img/partner_tab_3.png"
        alt="item.imageAlt"
        class="w-full md:max-w-[610px] md:-ml-10"
        format="webp"
      />
    </div>
    <div class="flex-1 flex flex-col px-10 md:mt-25 md:pr-10 md:pl-0">
      <Typography class="mb-11">
        With Visa's launch of the VAMP program, managing your chargeback ratios
        is more crucial than ever for merchants.
      </Typography>
      <Typography class="mb-11">
        Our traffic light status and alerts help you stay proactive and ahead of
        the curve.
      </Typography>
      <ul class="list-[square] pl-9">
        <li>
          <Typography>Chargeback Ratio</Typography>
        </li>
        <li>
          <Typography>Merchant Processing Limits</Typography>
        </li>
        <li>
          <Typography>Acquirer scheme Ratio</Typography>
        </li>
        <li>
          <Typography>Alerts</Typography>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>
