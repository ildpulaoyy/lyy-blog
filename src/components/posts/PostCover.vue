<script setup lang="ts">
import { computed } from "vue";
import { withBase } from "../../lib/urls";
const props = defineProps<{ kind: string; featured?: boolean; image?: string; large?: boolean }>();

const coverMap: Record<string, string> = {
  astro: "anime-cover-01",
  vue: "anime-cover-02",
  css: "anime-cover-03",
  notes: "anime-cover-04",
  life: "anime-cover-05",
  typescript: "anime-cover-06",
  git: "anime-cover-07",
  design: "anime-cover-08",
};

const custom = computed(() => {
  const value = props.image?.trim();
  if (!value) return "";
  if (/^(https?:)?\/\//.test(value) || value.startsWith("/")) return value;
  return withBase("/" + value.replace(/^\.?\//, ""));
});

const baseName = computed(() => coverMap[props.kind] || "anime-cover-01");
const fallback = computed(() => withBase(`/images/${baseName.value}.webp`));
const avifSrcset = computed(() =>
  [640, 800].map(w => `${withBase(`/images/avif/${baseName.value}-${w}.avif`)} ${w}w`).join(", ")
);
const sizes = computed(() =>
  props.large ? "(max-width: 900px) 92vw, 700px" : "(max-width: 640px) 92vw, 320px"
);
</script>
<template>
  <div class="anime-cover" :class="{ featured }">
    <img v-if="custom" :src="custom" alt="" loading="lazy" decoding="async" />
    <picture v-else>
      <source type="image/avif" :srcset="avifSrcset" :sizes="sizes" />
      <img :src="fallback" alt="" loading="lazy" decoding="async" width="800" height="500" />
    </picture>
  </div>
</template>
<style scoped>
.anime-cover { width: 100%; height: 100%; min-height: 180px; overflow: hidden; background: #f6e2d2; }
.anime-cover picture { display: block; width: 100%; height: 100%; }
.anime-cover img { width: 100%; height: 100%; object-fit: cover; object-position: center 35%; display: block; transition: transform .5s; }
</style>
