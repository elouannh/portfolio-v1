<script setup lang="ts">
import type { AboutMeTopicContent, ImageProps } from '@/types';
import { type Ref, ref } from 'vue';

const props = defineProps<AboutMeTopicContent>();

const imageDivStyle: Ref<string> = ref(
  `background-image: url("${props.image.url}");`
  + `background-size: ${props.image.width}px ${props.image.height}px;`
  + `width: ${props.image.width}px;`
  + `height: ${props.image.height}px;`
);

const lineLength: number = window.innerWidth - props.header.length * 145;

const lineStyle: Ref<string> = ref(
  `width: ${lineLength}px;`
  + `height: 10px;`
  + `background-color: white;`
);
</script>

<template>
  <main class="main">
    <div :class="{ 'column-display': image.display === 'row' }">
      <div class="header-with-line">
        <h1 class="topic-header">
          {{ header }}
        </h1>
        <div class="header-line" :style="lineStyle"></div>
      </div>
      <p class="topic-content">
        {{ content }}
      </p>
      <div class="topic-image" :style="imageDivStyle"></div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.main {
  max-width: 80vw;

  .header-with-line {
    display: flex;

    .topic-header {
      color: var(--about-me-topic-header-color);
      font-family: 'Space Mono', monospace;
      font-size: 145px;
    }

    .header-line {
      margin-bottom: 50px;
      margin-top: auto;
    }
  }

  .topic-content {
    color: var(--about-me-topic-content-color);
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    font-size: 30px;
  }
}
</style>