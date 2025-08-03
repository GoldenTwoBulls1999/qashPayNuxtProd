<template>
  <section
    class="w-full pt-60 md:pt-app-default min-h-[calc(100vh-var(--spacing-app-mobile))] md:min-h-[calc(100vh-var(--spacing-app-default))] flex justify-center @container/main"
  >
    <div class="w-full max-w-full max-h-fit flex flex-col">
      <div class="flex flex-col md:flex-row items-center gap-20 mb-60">
        <div class="flex-1 flex flex-col gap-20">
          <Typography size="heading-3" weight="medium">
            PCI Compliance Scanning
          </Typography>
          <Typography class="text-primary-400">
            Whether you're a merchant or a reseller, Clone Systems simplifies <span class="font-medium">PCI DSS 4.0.1 compliance</span> — making it secure, straightforward, and business-enabling. Our end-to-end solutions help organizations of all sizes achieve compliance while unlocking new opportunities for growth and profitability.
          </Typography>
          <AppButton class="size-68" color="black">
            Buy Now
          </AppButton>
        </div>
        <div class="flex-1 max-w-full md:max-w-1/2">
          <NuxtImg
            preload
            :src="`/img/chargeback_slider_1.png`"
            alt="explanation of checkout process"
            class="w-full"
            format="png"
          />
        </div>
      </div>

      <div class="mb-60">
        <Typography
          size="heading-4"
          weight="light"
          class="max-md:px-10 max-md:text-mobile-heading-4 text-left mb-40 md:mb-40"
        >
          Key benefits for Merchants of <span class="font-medium">PCI DSS 4.0.1</span>
        </Typography>
        <div class="flex gap-20 flex-col md:flex-row">
          <div class="flex-1 flex flex-col">
            <img
              :src="`/img/pci_security.svg`"
              alt="Unmatched Security"
              class="size-41 bg-transparent p-0 mb-5"
            />
            <Typography
              weight="medium"
              class="text-xl mb-[22px]"
            >
              Unmatched Security
            </Typography>
            <Typography
              weight="normal"
              class="text-base"
            >
              Protect your business and customers with advanced encryption, segmentation testing, and comprehensive vulnerability management.
            </Typography>
          </div>
          <div class="flex-1 flex flex-col">
            <img
              :src="`/img/pci_coverage.svg`"
              alt="Unmatched Security"
              class="size-41 bg-transparent p-0 mb-5"
            />
            <Typography
              weight="medium"
              class="text-xl mb-[22px]"
            >
              Comprehensive Coverage
            </Typography>
            <Typography
              weight="normal"
              class="text-base"
            >
              Protect your business and customers with advanced encryption, segmentation testing, and comprehensive vulnerability management.
            </Typography>
          </div>
          <div class="flex-1 flex flex-col">
            <img
              :src="`/img/pci_compliance.svg`"
              alt="Unmatched Security"
              class="size-41 bg-transparent p-0 mb-5"
            />
            <Typography
              weight="medium"
              class="text-xl mb-[22px]"
            >
              Simplified Compliance
            </Typography>
            <Typography
              weight="normal"
              class="text-base"
            >
              Achieve PCI DSS 4.0.1 compliance faster and easier with our seamless, automated solutions that streamline every step of the process.
            </Typography>
          </div>
        </div>
      </div>

      <div class="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen mb-60">
        <div class="bg-gray-100 py-16">
          <div class="max-w-4xl mx-auto px-8">
            <div class="max-w-6xl mx-auto px-8">
              <div class="text-center mb-1">
                <h2 class="text-3xl font-bold text-gray-900 mb-10">PCI Scanning Portal</h2>
                <p class="text-gray-500 max-w-2xl mx-auto text-lg">
                  Agent Portal is a real-time dashboard that provides data sets required to monitor at
                  the agent, acquirer, scheme and merchant levels.
                </p>
              </div>
              <div class="relative">
                <button @click="prevSlide" class="absolute left-4 top-1/2 transform -translate-y-1/2 size-20 md:size-32 bg-white rounded-full border-[#D9D9D9] border-1 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors z-10 cursor-pointer">
                  <img src="/img/arrow_left.svg" alt="">
                </button>
                <button @click="nextSlide" class="absolute right-4 top-1/2 transform -translate-y-1/2 size-20 md:size-32 bg-white rounded-full border-[#D9D9D9] border-1 shadow-sm flex items-center justify-center hover:bg-gray-50 transition-colors z-10 cursor-pointer">
                  <img src="/img/arrow_right.svg" alt="">
                </button>
                <div class="mx-32">
                  <img
                    :src="slides[currentSlide].image"
                    :alt="slides[currentSlide].alt"
                    class="w-full"
                  >
                </div>
                <div class="text-center mt-6">
                  <h3 class="text-lg font-medium text-gray-500 mb-2">{{ slides[currentSlide].title }}</h3>
                  <p class="text-sm text-gray-300">{{ currentSlide + 1 }} of {{ slides.length }}</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="flex flex-col gap-40 mb-40">
        <div class="flex gap-20 flex-col md:flex-row md:gap-40 md:items-center">
          <div
            class="w-full rounded-app-big overflow-hidden relative md:flex-1 md:max-w-[476px]"
          >
            <NuxtImg
              src="/img/chargeback_slider_1.png"
              alt="Exmaple of the application's work"
              class="w-full"
              loading="lazy"
              format="png"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[396px]">
            <div>
              <Typography size="heading-6" class="mb-2">Protect Your Cardholder Data</Typography>
              <Typography size="heading-4">
                Minimize Your Risk
              </Typography>
            </div>
            <Typography size="body-large" class="text-text-gray">
              <span>PCI scanning helps reduce the risk of cardholder data compromise and its potential impact on your organization. Receive clear, actionable remediation steps to address vulnerabilities identified during scans. Perform unlimited re-scans to validate fixes and ensure your network remains secure. Our threat intelligence and signatures are continuously updated from multiple trusted sources to defend against emerging risks.</span>
              <ul class="list-[square] pl-15 mt-10">
                <li>Clear remediation guidance</li>
                <li>Continuously updated threat intelligence and signatures</li>
              </ul>
            </Typography>
          </div>
        </div>
        <div
          class="flex flex-col gap-20 md:flex-row-reverse md:gap-20 md:items-center"
        >
          <div
            class="w-full rounded-app-big overflow-hidden relative md:flex-1 md:max-w-[476px]"
          >
            <NuxtImg
              src="/img/chargeback_slider_1.png"
              alt="Exmaple of the application's work"
              class="w-full"
              loading="lazy"
              format="png"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[396px]">
            <div>
              <Typography size="heading-6" class="mb-2">Protect Your Cardholder Data</Typography>
              <Typography size="heading-4">
                Leverage a Robust, Trusted Scanning Solution
              </Typography>
            </div>
            <Typography size="body-large" class="text-text-gray">
              <span>Utilize a powerful PCI data security scanning platform from an Approved Scanning Vendor (ASV) — fully aligned with PCI Security Standards Council requirements. Our intuitive, self-managed web-based portal allows you to schedule and run scans every 90 days, or as frequently as needed, to maintain compliance. Assess systems that store, process, or transmit cardholder data for vulnerabilities that could put sensitive information at risk.</span>
              <ul class="list-[square] pl-15 mt-10">
                <li>Fully meets PCI Security Standards Council requirements</li>
                <li>Self-managed, web-based scanning portal</li>
                <li>Maintain continuous PCI compliance</li>
                <li>Schedule scans at least every 90 days</li>
              </ul>
            </Typography>
          </div>
        </div>
        <div class="flex flex-col gap-20 md:flex-row md:gap-50 md:items-center">
          <div
            class="w-full relative rounded-app-big overflow-hidden md:flex-1 md:max-w-[476px]"
          >
            <NuxtImg
              src="/img/chargeback_slider_1.png"
              alt="Exmaple of the application's work"
              class="w-full"
              loading="lazy"
              format="png"
            />
          </div>
          <div class="flex flex-col gap-12 md:flex-1 md:max-w-[396px]">
            <div>
              <Typography size="heading-6" class="mb-2">PCI Compliance Reporting</Typography>
              <Typography size="heading-4">
                Meet All Reporting Requirements with Confidence
              </Typography>
            </div>
            <Typography size="body-large" class="text-text-gray">
              <span>Easily fulfill PCI compliance reporting obligations for acquiring banks, card brands, and other business partners. Access Executive, Detailed, and Attestation reports — each including ASV certification numbers — to support your assessment and reporting needs. The platform also provides access to the full range of Online Self-Assessment Questionnaires (SAQs), helping you accurately document and submit PCI SSC self-assessment results.</span>
              <ul class="list-[square] pl-10 mt-10">
                <li>PCI compliance scanning reports with ASV certification</li>
                <li>Full access to all SAQ types through an online portal</li>
              </ul>
            </Typography>
          </div>
        </div>
      </div>

      <div class="relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] w-screen">
        <div class="bg-gray-100 py-16 pt-50 pb-60">
          <div class="max-w-4xl mx-auto px-8 text-center">
            <Typography
              weight="medium"
              size="heading-3">
              PCI Compliance Scanning Now!
            </Typography>

            <AppButton class="size-68 mx-auto mt-25" color="pink">
              Buy Now
            </AppButton>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const currentSlide = ref(0)
const slides = ref([
  {
    image: '/img/pci_dashboard1.png',
    title: 'Clone Systems PCI Scanning Portal SAQ',
    alt: 'Dashboard Screenshot 1'
  },
  {
    image: '/img/pci_dashboard1.png',
    title: 'Clone Systems PCI Scanning Portal SAQ',
    alt: 'Dashboard Screenshot 2'
  },
  {
    image: '/img/pci_dashboard1.png',
    title: 'Clone Systems PCI Scanning Portal SAQ',
    alt: 'Dashboard Screenshot 3'
  },
  {
    image: '/img/pci_dashboard1.png',
    title: 'Clone Systems PCI Scanning Portal SAQ',
    alt: 'Dashboard Screenshot 4'
  },
  {
    image: '/img/pci_dashboard1.png',
    title: 'Clone Systems PCI Scanning Portal SAQ',
    alt: 'Dashboard Screenshot 5'
  },
  {
    image: '/img/pci_dashboard1.png',
    title: 'Clone Systems PCI Scanning Portal SAQ',
    alt: 'Dashboard Screenshot 6'
  },
  {
    image: '/img/pci_dashboard1.png',
    title: 'Clone Systems PCI Scanning Portal SAQ',
    alt: 'Dashboard Screenshot 7'
  },
  {
    image: '/img/pci_dashboard1.png',
    title: 'Clone Systems PCI Scanning Portal SAQ',
    alt: 'Dashboard Screenshot 8'
  },
])

const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % slides.value.length
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? slides.value.length - 1 : currentSlide.value - 1
}
</script>

<style>
.buy_button {
  width: 134px;
  padding-left: 0;
  padding-right: 0;
}
</style>
