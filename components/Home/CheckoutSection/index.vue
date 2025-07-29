<template>
  <section
    ref="container"
    class="trigger pt-84 pb-91 w-full max-md:pt-58 relative"
  >
    <div ref="title">
      <Typography size="heading-3" weight="medium" class="text-center">
        <span class="font-light">Choose your</span> checkout method
      </Typography>
    </div>
    <div class="w-full flex flex-col gap-40 mt-32">
      <CheckoutItem
        v-for="(item, index) in checkoutSectionItems"
        :key="item.title"
        :item="item"
        :index="index"
      >
        {{ item.text }}
      </CheckoutItem>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CheckoutItem from '~/components/Home/CheckoutSection/CheckoutItem.vue'
import { checkoutSectionItems } from '~/utils/checkoutSectionItems'

const container = ref<Element | null>(null)
const title = ref<Element | null>(null)

onMounted(() => {
  const { $gsap } = useNuxtApp()

  const containerEl = container.value
  const titleEl = title.value

  const mm = $gsap.matchMedia()
  const items = $gsap.utils.toArray('.checkout-item') as Element[]

  mm.add('(min-width: 768px)', () => {
    if (!titleEl || !containerEl) return

    items.forEach((item, index) => {
      if (index !== 0) $gsap.set(item, { position: 'absolute', y: 1000 })
    })

    let tl = $gsap
      .timeline({
        scrollTrigger: {
          trigger: items[0],
          start: 'center center',
          end: '+=' + (items.length * window.innerHeight + 300),
          scrub: 1,
          pin: containerEl,
          invalidateOnRefresh: true,
          toggleActions: 'play none reverse none',
          onEnter: () => {
            const titleTopOffset = titleEl.getBoundingClientRect().top
            tl.to(titleEl, { y: -titleTopOffset, duration: 3 }, 'start')
          },
        },
      })
      .addLabel('start')

    items.forEach((item, index) => {
      if (index !== 0) {
        tl.to(item, { y: 0, yPercent: 0, duration: 3 })
          .to(items[index - 1], { scale: 0.5, duration: 1 }, '<+=2')
          .to(items[index - 1], { opacity: 0, duration: 0.5 }, '<')
      }
    })
  })
})
</script>

<style scoped></style>
