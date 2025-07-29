<template>
  <div class="w-full">
    <div
      class="flex items-center md:rounded-tl-app-big md:rounded-tr-app-big bg-linear-to-t from-white to-[#F0F0F0]"
      role="tablist"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="index"
        class="flex-1 text-primary-400 border-b-2 border-white py-11 transition-all duration-300"
        :class="{
          'text-secondary-500 !border-secondary-500': activeTab === index,
          'cursor-pointer hover:text-secondary-500': activeTab !== index,
        }"
        :aria-selected="activeTab === index"
        role="tab"
        @click="selectTab(index)"
      >
        <Typography
          size="body-large"
          weight="medium"
          class="max-md:text-mobile-body-large"
        >
          {{ tab }}
        </Typography>
      </button>
    </div>

    <div class="min-h-fit pt-5 md:pt-40">
      <Transition name="fade" mode="out-in" role="tabpanel">
        <div :key="activeTab">
          <slot :name="`tab-${activeTab}`" />
        </div>
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
interface TabsProps {
  tabs: string[]
}

defineProps<TabsProps>()

const activeTab = ref<number>(0)

const selectTab = (index: number) => {
  activeTab.value = index
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
