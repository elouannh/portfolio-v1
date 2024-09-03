<script setup lang="ts">

import FixedHeaderElement from '@/components/header/FixedHeaderElement.vue';
import { type Ref, ref } from 'vue';

const fixedHeaderElements: Ref<{ href: string, label: string }[]> = ref([
  { href: "/", label: "whoAmI" },
  { href: "/skills-projects", label: "skillsAndProjects" },
  { href: "/hire-me", label: "hireMe" },
  { href: "/special", label: "special" }
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
  z-index: 10;
  position: fixed;
  width: 100%;
  padding-top: 30px;
  padding-bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  background: var(--fixed-header-bg);
  justify-content: center;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border: var(--fixed-header-border-color) 2px solid;

  .header-ul {
    display: flex;
    text-align: center;
    gap: 8vw;
  }
}
</style>