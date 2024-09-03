<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>

<template>
  <div class="label-container">
    <h1 class="label-title">
      {{ t("home.label") }}
    </h1>
    <h2 class="label-catchphrase">
      {{ t("home.catchphrase") }}
    </h2>
  </div>
</template>

<style scoped lang="scss">
.label-container {
  position: absolute;
  top: 300px;
  left: 50%;
  width: 40vw;
  transform: translateX(-50%);

  .label-title {
    color: var(--home-intro-label-title-color);
    font-family: "Poppins", sans-serif;
    font-size: 85px;
  }

  .label-catchphrase {
    color: var(--home-intro-label-catchphrase-color);
    text-shadow: 0 0 30px var(--home-intro-label-catchphrase-tshadow);
    font-family: "Space Mono", monospace;
    font-size: 35px;

    -webkit-animation: home-catch-flicker-entrance 2.5s linear both;
    animation: home-catch-flicker-entrance 2.5s linear both;
  }


}
</style>