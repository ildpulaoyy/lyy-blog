<script setup lang="ts">
import { withBase } from "../../lib/urls";
const props = defineProps<{ kind: string; featured?: boolean }>();
const coverMap: Record<string, string> = {
  astro: "anime-cover-01.jpg",
  vue: "anime-cover-02.jpg",
  css: "anime-cover-03.jpg",
  notes: "anime-cover-04.jpg",
  life: "anime-cover-05.jpg",
  typescript: "anime-cover-06.jpg",
  git: "anime-cover-07.jpg",
  design: "anime-cover-08.jpg",
};
const src = withBase(`/images/${coverMap[props.kind] || "anime-cover-01.jpg"}`);
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
