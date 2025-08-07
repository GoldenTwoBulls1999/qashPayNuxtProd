<template>
  <section class="w-full pb-60 @container/main">
    <div
      class="flex gap-19 -mx-10 @min-[992px]/main:-mx-[calc((100vw-992px)/2)] px-10 @min-[992px]/main:pl-[calc((100vw-992px)/2)] bg-radial bg-radial-[ellipse_70%_102%_at_50%_100%] from-[#F9F8FF] to-white my-30"
    >
      <div
        class="flex flex-col md:justify-center w-full min-[1300px]:max-w-1/2"
      >
        <div class="mt-24">
          <div class="flex-1 flex-col">
            <Typography size="heading-2" class="text-start mb-16">
              What are Shop Plugins?
            </Typography>
            <Typography
              size="body-large"
              class="text-start text-primary-400 max-w-[648px] mr-auto mb-40"
            >
              Shop plugins are software components that add specific features or
              functionalities to e-commerce platforms. They enable merchants to
              enhance their online stores without extensive technical
              development, allowing merchants to integrate payment capabilities
              seamlessly into their existing e-commerce shop systems.
            </Typography>
          </div>
        </div>
        <div class="mt-12 -mr-10 block md:hidden">
          <div
            class="w-full relative flex justify-center @min-[992px]/main:block"
          >
            <NuxtImg
              preload
              src="/img/platforms_1_block.png"
              alt="Qashpay payment on desktop"
              class="max-h-[392px]"
              format="png"
            />
          </div>
        </div>
      </div>
      <div class="mt-12 hidden md:block w-full 2xl:max-w-1/2">
        <div class="w-full">
          <NuxtImg
            preload
            src="/img/platforms_1_block.png"
            alt="Qashpay payment on desktop"
            class="max-h-[392px]"
            format="png"
          />
        </div>
      </div>
    </div>
    <div class="w-full max-h-fit flex flex-col">
      <div
        class="mb-40 px-10 relative @max-[992px]/main:-mx-10 @min-[992px]/main:-mx-[calc((100vw-992px)/2)]"
      >
        <div class="max-w-[992px] mx-auto flex flex-col gap-20 py-34">
          <div
            class="flex flex-col md:flex-row gap-10 justify-between items-start md:items-end"
          >
            <Typography size="heading-4">
              Key benefits
              <br />
              <span class="font-medium">of Shop Plugins include</span>
            </Typography>
            <AppButton to="#">Learn more</AppButton>
          </div>
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mt-10"
          >
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Ease of Use
              </Typography>
              <Typography size="body-large">
                Simple plug-and-play configuration that requires minimal
                technical expertise.
              </Typography>
            </div>
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Quick Setup
              </Typography>
              <Typography size="body-large">
                Merchants can quickly integrate payment options into their
                online stores.
              </Typography>
            </div>
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Flexibility
              </Typography>
              <Typography size="body-large">
                Compatible with various shop systems, making it a versatile
                solution for different business needs.
              </Typography>
            </div>
            <div class="border-t-1 border-primary-200 pt-7">
              <Typography size="heading-6" weight="medium" class="mb-10">
                Support for Small
              </Typography>
              <Typography size="body-large">
                Tailored to meet the needs of small merchants, helping them to
                efficiently manage their payment processes.
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div
        class="flex flex-col md:flex-row md:items-center gap-16 mb-blocks-gap"
      >
        <div
          class="max-h-[451px] w-full md:w-[304px] aspect-1/2 h-full flex justify-center items-center border border-primary-100 rounded-app-big shadow-plugin"
        >
          <NuxtImg
            src="/img/platforms_shopify.png"
            alt="shopify logo"
            class="max-h-[60px] w-auto object-contain max-w-[186px] h-[60px]"
            loading="lazy"
            format="png"
          />
        </div>
        <div class="flex md:flex-1 flex-col gap-13 md:pl-20">
          <Typography size="heading-4" weight="medium">
            The Shopify Checkout & Shopping Cart Plugin:
            <span class="font-normal">Quick Setup, Instant Use</span>
          </Typography>
          <Typography size="body-large">
            The Shopify checkout and shopping cart plugin is the most widely
            used solution for e-commerce businesses looking for a seamless
            shopping experience. Designed for both beginners and experienced
            store owners, it is ready to use right out of the box.
          </Typography>
          <div class="flex items-center gap-8 bg-primary-100 rounded-lg p-5">
            <Icon
              mode="svg"
              width="30"
              height="30"
              name="app-icon:timer-icon"
              class="min-w-15 min-h-15"
            />
            <Typography size="body-large" weight="medium">
              With a few simple steps, you can integrate it into your store and
              have your checkout process up and running in just a few minutes.
            </Typography>
          </div>
          <Typography size="body-large">
            No complex configuration required — just plug it in, customize to
            your brand, and start accepting orders in no time. Whether you're
            selling physical products, digital goods, or services, this plugin
            ensures a smooth, secure, and fast transaction experience for your
            customers.
          </Typography>
        </div>
      </div>
      <div class="flex flex-col gap-30 mb-40">
        <Typography size="heading-3" weight="medium">
          Plugin Platforms
        </Typography>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#adobeCommerce"
            title="Adobe Commerce Cloud"
            image="platforms_plugin_adobe"
            image-title="Adobe Commerce logo"
          />
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#bigCommerce"
            title="BigCommerce"
            image="platforms_plugin_bigcommerce"
            image-title="BigCommerce logo"
          />
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#shopify"
            title="Shopify"
            image="platforms_plugin_shopify"
            image-title="Shopify logo"
          />
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#wooCommerce"
            title="WooCommerce"
            image="platforms_plugin_woo"
            image-title="WooCommerce logo"
          />
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#openCart"
            title="OpenCart"
            image="platforms_plugin_opencart"
            image-title="OpenCart logo"
          />
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#commerceTools"
            title="CommerceTools"
            image="platforms_plugin_commercetools"
            image-title="CommerceTools logo"
            label="coming-soon"
          />
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#prestaShop"
            title="PrestaShop"
            image="platforms_plugin_prestashop"
            image-title="PrestaShop logo"
          />
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#sap"
            title="SAP"
            image="platforms_plugin_sap"
            image-title="SAP logo"
            label="on-demand"
          />
          <PlatformItem
            to="https://quaife.docs.oppwa.com/tutorials/plugins#salesforce"
            title="SFCC"
            image="platforms_plugin_salesforce"
            image-title="SFCC logo"
            label="on-demand"
          />
        </div>
      </div>

      <Typography size="body-large" class="max-w-[658px] mb-20">
        By leveraging our Shop Plugin extension, merchants can focus on growing
        their business while enjoying a hassle-free payment integration
        experience. This solution not only enhances the operational efficiency
        of any size merchant but also provides a competitive edge in the market.
      </Typography>
      <AppButton to="#" color="black">Learn more about Plugins</AppButton>
    </div>
  </section>
</template>

<script setup lang="ts">
import PlatformItem from '~/components/Platforms/PlatformItem.vue'
</script>
