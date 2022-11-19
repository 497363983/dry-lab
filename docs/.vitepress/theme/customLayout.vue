<script setup>
import DefaultTheme from "vitepress/theme";
import contributors from "./components/contributors.vue";
import changeLog from "./components/changeLog.vue";
import CopyRight from "./components/copyRight.vue";
import { useData } from "vitepress";
const { Layout } = DefaultTheme;
const {page} = useData();
</script>

<template>
  <Layout>
    <template #doc-footer-before>
      <ClientOnly>
        <CopyRight :article="page.frontmatter" />
      </ClientOnly>
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
