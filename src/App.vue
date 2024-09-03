<script setup lang="ts">
import { RouterView } from 'vue-router';
import { useLenis } from '@/composables/useLenis';

useLenis();
</script>

<template>
  <RouterView />
</template>

<style scoped lang="scss">
</style>
