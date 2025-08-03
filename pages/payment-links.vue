<template>
  <section
    class="w-full pt-60 pb-69 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center @container/main"
  >
    <div class="w-full max-h-fit flex flex-col">
      <div class="mb-30 min-[1300px]:max-w-[calc(992px)]">
        <div class="flex flex-col-reverse md:flex-row items-center h-full">
          <div class="flex-1 flex-col">
            <Typography size="heading-2" class="text-start mb-10">
              Payment Links
            </Typography>
            <Typography size="heading-5" class="text-start mb-10">
              Simple, fast and effective payments
            </Typography>
            <Typography class="text-start max-w-[575px] mx-auto">
              The payment experience is faster and more convenient than ever. The
              option to pay using a secure link sent via SMS text message, email,
              WhatsApp or other channels was born out of convenience and
              modernization, and continues to accelerate as eCommerce grows.
            </Typography>
          </div>
          <div class="flex-1 flex justify-center relative">
            <div class="">
              <NuxtImg
                  preload
                  :src="`/img/payment_links_1_block.png`"
                  alt="item.imageAlt"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        class="mt-40 relative @max-[992px]/main:-mx-10 @min-[992px]/main:-mx-[calc((100vw-992px)/2)] bg-linear-to-b from-primary-100 to-white"
      >
        <div
          class="max-w-[992px] mx-auto flex flex-col md:flex-row justify-end gap-23 px-10 py-10 md:py-0"
        >
          <div class="w-full md:w-[326px] h-[620px] shrink-0 relative">
            <NuxtImg
              preload
              src="/img/payment_links_phone.png"
              alt="phone image with some text messages"
              class="absolute top-0 md:-top-30 left-1/2 max-md:-translate-x-1/2 md:left-0 w-full max-w-[326px] max-h-[620px] z-20"
              format="png"
            />
          </div>
          <div class="w-full md:max-w-[648px] md:mt-39 md:px-20 py-13">
            <Typography size="heading-5" class="mb-15">
              What is a payment link?
            </Typography>
            <Typography class="mb-20">
              A payment link is essentially a URL or QR Code that directs the
              customer to an online payment page when clicked on or scanned.
              Once on the payment page, customers can complete the transaction
              using their debit or credit card information, or choose an
              alternative payment method. Unique one-time payment links can be
              set up for each good or service being sold.
            </Typography>
            <Typography size="heading-5" class="mb-15">
              Simple, fast and effective payments
            </Typography>
            <Typography class="md:max-w-250">
              Merchants are seeing a rise in demand for contactless ways to pay.
              Reach more customers on the channels they are using with this
              simple link and QR code generating system. It is perfect for
              non-hosted payment platforms, during website or app development,
              or as an alternative way to communicate.
            </Typography>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-20 mt-10">
        <BenefitItem icon="users-icon" title="Flexible">
          Convert interactions and conduct transaction risk checks
        </BenefitItem>
        <BenefitItem icon="money-document-icon" title="Convenient">
          Reduce time tracking down unpaid invoices and payment status
        </BenefitItem>
        <BenefitItem icon="card-lock-icon" title="Secure">
          Convert interactions and conduct transaction risk checks
        </BenefitItem>
        <BenefitItem icon="money-transfer-icon" title="Timely">
          Generate real-time payment links and QR codes quickly and easily
        </BenefitItem>
      </div>
      <div
        class="mt-37 px-10 relative @max-[992px]/main:-mx-10 @min-[992px]/main:-mx-[calc((100vw-992px)/2)] bg-primary-100"
      >
        <div class="max-w-[992px] mx-auto flex flex-col gap-20 py-34">
          <Typography size="heading-4">
            How can payment links be distributed?
          </Typography>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10"
          >
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                SMS & Chat
              </Typography>
              <Typography>
                Send payment links through your most popular conversation
                channels such as SMS or WhatsApp.
              </Typography>
            </div>
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Email
              </Typography>
              <Typography>
                Payment links can be embedded in emails, which is especially
                useful for abandoned cart reminders.
              </Typography>
            </div>
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Social Media
              </Typography>
              <Typography>
                Social media is a powerful tool for driving sales. Why not offer
                payments acceptance there, too? Merchants can share a payments
                link through social media messaging or in social feeds.
              </Typography>
            </div>
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Ecommerce
              </Typography>
              <Typography>
                Payment links on ecommerce websites are becoming more common.
                Buttons like &#8220;Order Now&#8221; and &#8220;Buy Now&#8221;
                can be added to digital storefronts, expediting the checkout
                experience with less clicks.
              </Typography>
            </div>
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Call Center
              </Typography>
              <Typography>
                Send a payments link during customer calls for greater checkout
                security instead of taking credit card information over the
                phone.
              </Typography>
            </div>
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Invoicing
              </Typography>
              <Typography>
                Add payment links to invoices to get paid directly. These
                channels are ideal for closing transactions in a quick and
                efficient manner; merchants can distribute payment links through
                any channel that works best for their business.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <Typography size="heading-4" class="text-center mt-40 mb-20">
        Are payment links secure?
      </Typography>
      <Typography class="text-center max-w-[658px] mx-auto mb-20">
        Merchants and customers can rest assured that QashPay is secure and is
        considered a PCI DSS-compliant method of taking payments.
      </Typography>
      <div class="flex items-center justify-center">
        <AppButton to="#">Learn more</AppButton>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import BenefitItem from '~/components/Home/BenefitsSection/BenefitItem.vue'
</script>
