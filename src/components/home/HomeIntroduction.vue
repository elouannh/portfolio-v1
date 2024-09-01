<script setup lang="ts">

import FixedHeader from '@/components/header/FixedHeader.vue'
</script>

<template>
  <main class="main">
    <fixed-header/>
  </main>
</template>

<style scoped lang="scss">
.main {
  width: 100vw;
  height: 100vh;
  background: black;
  overflow: hidden;
}
</style>