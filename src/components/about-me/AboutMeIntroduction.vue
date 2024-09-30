<script setup lang="ts">
import { type Ref, ref } from 'vue';
import type { AboutMeTopicContent } from '@/types';
import AboutMeTopic from '@/components/about-me/AboutMeTopic.vue';

const history: Ref<AboutMeTopicContent[]> = ref([
  {
    header: "Test",
    content: 'Lorem ipsum odor amet, consectetuer adipiscing elit. Orci arcu lobortis vivamus class vel. Phasellus nibh eleifend fringilla imperdiet nullam. Efficitur pulvinar porttitor nascetur lectus praesent; sit fames. Facilisi potenti tellus vestibulum class amet diam vestibulum ridiculus. Sollicitudin urna commodo massa facilisi tempus ipsum venenatis.',
    image: {
      width: 200,
      height: 200,
      url: 'https://media.botmarket.ovh/lqiECfKEqGgajCp.gif',
      position: 'left',
      display: 'row'
    }
  },
  {
    header: "Test",
    content: "Test",
    image: {
      width: 200,
      height: 200,
      url: 'https://media.botmarket.ovh/lqiECfKEqGgajCp.gif',
      position: 'left',
      display: 'row'
    }
  }
]);
</script>

<template>
  <div class="topic-container">
    <div class="topic-element" v-for="hist in history" :key="hist.header">
      <about-me-topic v-bind="hist"></about-me-topic>
    </div>
  </div>
</template>

<style scoped lang="scss">
.topic-container {
  width: 100vw;
  background: var(--about-me-intro-bg);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 40vh;
  align-items: center;
}
</style>