<template>
  <div class="landing-page">
    <SimpleHeader />
    <SimpleHero />
    <FeaturesSection />
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import SimpleHeader from '@/components/SimpleHeader.vue'
import SimpleHero from '@/components/SimpleHero.vue'
import FeaturesSection from '@/components/FeaturesSection.vue'
import AppFooter from '@/components/AppFooter.vue'
</script>

<style scoped>
.landing-page {
  min-height: 100vh;
  background: var(--bg);
  width: 100%;
}
</style>
