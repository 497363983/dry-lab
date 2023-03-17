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

const link = computed(() =>
  props.article.link
    ? props.article.link
    : props.article.username
    ? `https://github.com/${props.article.username}`
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
  <div v-if="author" class="copy-right-box flex flex-column gap-2">
    <div class="flex gap-2">
      <octicon-person-16 />
      <span
        >Author:
        <a class="doc-link" v-if="link" :href="link" target="_blank">{{ author }}</a>
        <span v-else>{{ author }}</span>
      </span>
    </div>
    <div class="flex gap-2">
      <octicon-share-android-16 />
      <span
        >License:
        <a class="doc-link" href="https://creativecommons.org/licenses/by/4.0/"
          >Attribution 4.0 International (CC BY 4.0)
        </a>
        <em>Please indicate the source</em></span
      >
    </div>
    <div></div>
  </div>
</template>

<style lang="scss" scoped>
.copy-right-box {
  margin: 16px 0;
  border-color: var(--vp-custom-block-tip-border);
  background-color: var(--vp-custom-block-tip-bg);
  border: 1px solid transparent;
  border-radius: 8px;
  padding: 16px;
  line-height: 24px;
  font-size: 14px;
}
</style>
