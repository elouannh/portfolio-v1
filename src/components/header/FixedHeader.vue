<script setup lang="ts">

import FixedHeaderElement from '@/components/header/FixedHeaderElement.vue';
import { type Ref, ref } from 'vue';

const fixedHeaderElements: Ref<{ href: string, label: string }[]> = ref([
  { href: "", label: "whoAmI" },
  { href: "", label: "skillsAndProjects" },
  { href: "", label: "hireMe" },
  { href: "", label: "special" }
]);
</script>

<template>
  <div class="navbar">
    <ul class="header-ul">
      <li class="fixed-header-elt" v-for="element in fixedHeaderElements" :key="element.href">
        <fixed-header-element v-bind="element"/>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.navbar {
  position: fixed;
  width: 100%;
  padding: 30px 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background: var(--fixed-header-bg);
  justify-content: center;
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border: var(--fixed-header-border-color) 2px solid;

  .header-ul {
    display: flex;
    text-align: center;
    gap: 8vw;
  }
}
</style>