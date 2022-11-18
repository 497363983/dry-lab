<script setup>
import _contributors from "/virtual-contributors";
import { computed } from "vue";
import { useData } from "vitepress";

const { page } = useData();
const contributors = computed(() => _contributors[page.value.relativePath]);
console.log(_contributors, useData());
</script>

<template>
  <div v-if="contributors.length !== 0">
    <h2 class="doc-head">Contributors</h2>
    <div class="flex gap-4">
      <div
        class="flex items-center gap-2"
        v-for="c of contributors"
        :key="c.hash"
      >
        <img
          class="avatar"
          :src="`https://gravatar.com/avatar/${c.hash}?d=retro`"
          :alt="c.name"
        />
        {{ c.name }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.avatar {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 8px;
}
</style>
