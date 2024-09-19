<script setup lang="ts">
import { type Ref, ref } from 'vue'

const canvas = ref(null);
const width: Ref<number> = ref(window.innerWidth);
const height: Ref<number> = ref(window.innerHeight);
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