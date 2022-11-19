<script setup>
import { computed, onMounted, ref } from "vue";
import { useData } from "vitepress";

const { page, localePath } = useData();
const pages = ref([]);

const props = defineProps({
  article: {
    type: Object,
    required: true,
  },
});

const currentPage = computed(() => {
  return pages.value.find((i) => i.docPath === page.value.relativePath);
});

const author = computed(() => {
  return props.article.author || currentPage.value?.author;
});

const date = computed(() => {
  return currentPage.value?.publishTime
    ? new Date(currentPage.value?.publishTime).toLocaleString()
    : null;
});

const link = computed(() =>
  props.article.link
    ? props.article.link
    : props.article.username
    ? `https://github.com/${props.article.username}`
    : null
);

onMounted(async () => {
  if (localePath.value === "/dry-lab/") {
    pages.value = (await import("../../../document/index.json")).default;
  } else if (localePath.value === "/dry-lab/zh-cn/") {
    pages.value = (await import("../../../zh-cn/document/index.json")).default;
  }
});
</script>

<template>
  <div class="flex gap-4" style="magin-top: 1.5rem">
    <div v-if="author" class="flex gap-2" style="opacity: 50%" title="author">
      <octicon-person-16 />
      <a v-if="link" :href="link">{{ author }}</a>
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
