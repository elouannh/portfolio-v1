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
  width: fit-content;
  padding: 3vh 5vw;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  background: rgba(93,93,93, 0.5);
  background: linear-gradient(156deg, rgba(93,93,93,0.5) 0%, rgba(47,47,47,0.5) 100%);
  -webkit-backdrop-filter: blur(5px);
  backdrop-filter: blur(5px);
  border-radius: 5vw;
  border: white 2px solid;

  .header-ul {
    display: flex;
    text-align: center;
    gap: 8vw;
  }
}
</style>