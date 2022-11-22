<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "",
  },
  width: {
    type: String,
    default: "100%",
  },
  prefix: {
    type: String,
    default: "Fig",
  },
  caption: {
    type: String,
    default: "",
  },
  index: {
    type: Number,
    default: null,
  },
});
</script>
<template>
  <div class="img-viewer">
    <img :style="{ width }" :src="src" :alt="alt" />
    <span v-if="index" v-html="`${prefix} ${index}. ${caption}`"></span>
  </div>
</template>

<style lang="scss" scoped>
.img-viewer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem 0;
  img {
    max-width: 100%;
    max-height: 100%;
  }
}
</style>
