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
    font-size: 23px;
    font-family: "Space Mono", sans-serif;
    color: var(--fixed-header-elt-color);
    word-wrap: unset;
    display: block;
    white-space: nowrap;
    transition-duration: 500ms;
    position: relative;

    &:after{
      bottom: -2px;
      left: 50%;
      content: "";
      display: block;
      height: 2px;
      position: absolute;
      background: var(--fixed-header-elt-undl-bg);
      transition: width 0.3s ease 0s, left 0.3s ease 0s, background-color 0.3s;
      width: 0;
    }

    &:hover {
      color: var(--fixed-header-elt-color-hover);
      text-shadow: 0 0 3px var(--fixed-header-elt-tshadow-hover);

      &:after{
        width: 100%;
        background: var(--fixed-header-elt-undl-after-bg);
        box-shadow: 0 0 30px var(--fixed-header-elt-undl-after-shadow);
        border-radius: 10px;
        left: 0;
      }
    }
  }
}
</style>