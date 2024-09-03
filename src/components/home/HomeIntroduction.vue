<script setup lang="ts">

import FixedHeader from '@/components/header/FixedHeader.vue'
import HomeIntroductionLabel from '@/components/home/HomeIntroductionLabel.vue'
</script>

<template>
  <main class="main">
    <fixed-header/>
    <home-introduction-label/>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  background: var(--home-intro-bg);
  overflow: hidden;
}
</style>