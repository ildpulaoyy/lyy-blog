<script setup lang="ts">
import { withBase } from "../../lib/urls";
const props = defineProps<{ kind: string; featured?: boolean }>();
const coverMap: Record<string, string> = {
  astro: "anime-cover-01.webp",
  vue: "anime-cover-02.webp",
  css: "anime-cover-03.webp",
  notes: "anime-cover-04.webp",
  life: "anime-cover-05.webp",
  typescript: "anime-cover-06.webp",
  git: "anime-cover-07.webp",
  design: "anime-cover-08.webp",
};
const src = withBase(`/images/${coverMap[props.kind] || "anime-cover-01.webp"}`);
</script>
<template>
  <div class="anime-cover" :class="{ featured }">
    <img :src="src" alt="" loading="lazy" />
  </div>
</template>
<style scoped>
.anime-cover { width: 100%; height: 100%; min-height: 180px; overflow: hidden; background: #f6e2d2; }
.anime-cover img { width: 100%; height: 100%; object-fit: cover; object-position: center 35%; display: block; transition: transform .5s; }
</style>
