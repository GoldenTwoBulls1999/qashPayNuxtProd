<template>
  <section
    class="w-full pt-30 md:pt-60 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center @container/main"
  >
    <div class="w-full max-h-fit flex flex-col">
      <Typography size="heading-3" md:size="heading-1" class="text-center mb-19">
        Checkout Guides
      </Typography>
      <Typography class="text-center max-w-[648px] mx-auto mb-20 md:mb-42">
        Make sure your website's checkout process aligns with Card Scheme
        requirements. A seamless, compliant checkout not only enhances the
        customer experience but also helps minimize chargebacks.
      </Typography>
      <NuxtImg
        preload
        :src="`/img/checkout_guides.png`"
        alt="explanation of checkout process"
        class="w-full hidden md:block"
        format="png"
      />

      <div class="block md:hidden relative">
        <NuxtImg
          preload
          :src="`/img/checkoutform_mobile.png`"
          alt="Checkout Guides"
          class="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen max-w-[100vw]"
          format="png"
        />
        <div class="absolute w-full h-full top-0 left-0 z-10">
          <div class="absolute top-[1%] left-[18%] bg-[#FF52A8] size-11 rounded-full flex flex-items-center items-center justify-center" @click="toggleHint('ssl')"><img src="/img/plus.svg" alt="" class="size-3"></div>
          <div class="absolute top-[9%] left-[99%] bg-[#FF52A8] size-11 rounded-full flex flex-items-center items-center justify-center" @click="toggleHint('banner')"><img src="/img/plus.svg" alt="" class="size-3"></div>
          <div class="absolute top-[26%] left-[74%] bg-[#FF52A8] size-11 rounded-full flex flex-items-center items-center justify-center" @click="toggleHint('logos')"><img src="/img/plus.svg" alt="" class="size-3"></div>
          <div class="absolute top-[66%] left-[22%] bg-[#FF52A8] size-11 rounded-full flex flex-items-center items-center justify-center" @click="toggleHint('checkout')"><img src="/img/plus.svg" alt="" class="size-3"></div>
          <div class="absolute top-[86%] left-[77%] bg-[#FF52A8] size-11 rounded-full flex flex-items-center items-center justify-center" @click="toggleHint('descriptor')"><img src="/img/plus.svg" alt="" class="size-3"></div>
          <div class="absolute top-[96%] left-[1%] bg-[#FF52A8] size-11 rounded-full flex flex-items-center items-center justify-center" @click="toggleHint('footer')"><img src="/img/plus.svg" alt="" class="size-3"></div>
        </div>
        <div v-if="hintVisible" class="absolute top-1/2 transform -translate-y-1/2 left-1/2 -translate-x-1/2 w-full bg-white p-7 z-20">
          <div class="absolute top-[13px] right-[13px]" @click="toggleHint(null)"><img src="/img/close.svg" alt="" size="8"></div>
          <Typography size="body-large" weight="medium" class="mb-6">{{ currentHint.title }}</Typography>
          <Typography size="body-normal">{{ currentHint.text }}</Typography>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
type HintItem = { title: string; text: string }

const currentHint = ref<HintItem>({title: '', text: ''});
const hintVisible = ref(false);

const hints: Record<string, HintItem> = {
  ssl: {
    title: 'SSL Certificate',
    text: 'An SSL certificate ensures your visitors\' safety and is displayed with a lock symbol next to the URL, accompanied by a green Hypertext Transfer Protocol.'
  },
  checkout: {
    title: 'Checkout',
    text: 'The checkout should clearly show the amount being charged and the currency. It should display the payment card details section to complete the payment.'
  },
  footer: {
    title: 'Footer',
    text: 'The footer should include links to the Privacy Policy page, Terms of Use and return and delivery policies, if applicable.'
  },
  descriptor: {
    title: 'Descriptor',
    text: 'Display how the company name and telephone number will appear on the customer statement.'
  },
  banner: {
    title: 'Website Banner',
    text: 'The website header should display a link to the contact page, which should include a contact number and a support address.'
  },
  logos: {
    title: 'Card Scheme Logos',
    text: 'It\'s crucial to adhere to the scheme rules, especially regarding the display of logos and branding at the checkout. Merchants must identify accepted payment schemes (e.g., Visa, Mastercard) with their respective logos, ensuring visual quality, clarity, and consistent size. These logos should be displayed on the website checkout and payment pages.'
  }
}

const toggleHint = (hint: string | null) => {
  if (hint) {
    currentHint.value = hints[hint];
    hintVisible.value = true;
  } else {
    hintVisible.value = false;
  }
}
</script>
