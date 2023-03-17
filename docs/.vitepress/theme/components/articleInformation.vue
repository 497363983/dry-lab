<script setup>
import { computed, onMounted, ref } from "vue";
import { useData } from "vitepress";
import {data as articles} from "../data/articles.data.js";

const { page } = useData();
const frontmatter = computed(() => page.value.frontmatter);
const pages = ref([]);
console.log(page, articles);

const currentPage = computed(() => {
  return pages.value.find((i) => i.docPath === page.value.relativePath);
});

const author = computed(() => {
  return frontmatter.value.author || currentPage.value?.author;
});

const date = computed(() => {
  return currentPage.value?.publishTime
    ? new Date(currentPage.value?.publishTime).toLocaleString()
    : null;
});

const link = computed(() =>
  frontmatter.value.link
    ? frontmatter.value.link
    : frontmatter.value.username
    ? `https://github.com/${frontmatter.value.username}`
    : null
);

onMounted(async () => {
  if (localePath.value === "/dry-lab/") {
    pages.value = (await import("../../../document/en/index.json")).default;
  } else if (localePath.value === "/dry-lab/zh-cn/") {
    pages.value = (await import("../../../document/zh-cn/index.json")).default;
  }
});
</script>

<template>
  <div class="flex gap-4" style="margin-top: 1.5rem">
    <div v-if="author" class="flex gap-2" style="opacity: 50%" title="author">
      <octicon-person-16 />
      <a class="doc-link" v-if="link" :href="link" target="_blank">{{
        author
      }}</a>
      <span v-else>{{ author }}</span>
    </div>
    <div
      v-if="date"
      class="flex gap-2"
      style="opacity: 50%"
      title="Publish time"
    >
      <octicon-clock-16 />
      <span>{{ date }}</span>
    </div>
  </div>
</template>
