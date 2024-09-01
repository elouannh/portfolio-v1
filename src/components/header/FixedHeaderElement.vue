<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();

defineProps<{
  href: string,
  label: string,
}>();
</script>

<template>
  <router-link :to="href">
    <p class="link-label">{{ t(`header.${label}`) }}</p>
  </router-link>
</template>

<style scoped lang="scss">
.main {
  .link-label {
    font-size: 21px;
    font-family: "Space Mono", sans-serif;
    color: white;
    word-wrap: unset;
    display: block;
    white-space: nowrap;
    transition-duration: 500ms;

    &:hover {
      color: rgb(218, 202, 255);
      text-shadow: 0 0 3px rgb(120, 52, 255);
    }
  }
}
</style>