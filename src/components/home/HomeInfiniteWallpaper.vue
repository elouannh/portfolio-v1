<script setup lang="ts">
import { ref } from 'vue';

const canvas = ref(null);
const width: number = ref(window.innerWidth);
const height: number = ref(window.innerHeight);
</script>

<template>
  <canvas
    ref="canvas"
    class="canvas-background"
    :width="width"
    :height="height">
  </canvas>
</template>

<style scoped lang="scss">

</style>