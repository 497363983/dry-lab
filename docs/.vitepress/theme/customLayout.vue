<script setup>
import DefaultTheme from "vitepress/theme";
import contributors from "./components/contributors.vue";
import changeLog from "./components/changeLog.vue";
const { Layout } = DefaultTheme;
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <ClientOnly>
        <contributors />
      </ClientOnly>
      <ClientOnly>
        <changeLog />
      </ClientOnly>
    </template>
  </Layout>
</template>

<style lang="scss">
@import "./style/common.scss";
</style>
