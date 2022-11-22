<script setup>
import changelog from "/virtual-changelog";
import { computed } from "vue";
import { useData } from "vitepress";

const { page } = useData();

console.log(changelog);
const allCommits = changelog;

const commits = computed(() => {
  return allCommits.filter((i) => {
    return i.pages.includes(page.value.relativePath) ? true : false;
  });
});
</script>

<template>
  <div>
    <h2 class="doc-head">ChangeLog</h2>
    <em v-if="commits.length === 0">No recent change</em>
    <div
      style="margin-top: 0.5rem"
      v-for="(commit, index) of commits"
      :key="commit.hash"
    >
      <div class="flex gap-2">
        <octicon-rocket-16 m="auto" />
        <span style="font-size: 0.75rem; line-height: 1rem; opacity: 0.5"
          >on {{ new Date(commit.date).toLocaleDateString() }}</span
        >
      </div>
      <div class="flex gap-2" style="margin-top: 0.5rem">
        <octicon-git-commit-16 style="transform: rotate(90deg)" />
        <a
          class="doc-link"
          style="font-size: 0.875rem; line-height: 1.25rem"
          :href="`https://github.com/497363983/dry-lab/commit/${commit.hash}`"
          target="_blank"
        >
          <code class="doc-code">{{ commit.hash.slice(0, 5) }}</code>
        </a>
        <span style="font-size: 0.875rem; line-height: 1.25rem">
          -
          <span v-html="commit.message" />
        </span>
      </div>
    </div>
  </div>
</template>
