<script setup lang="ts">
  defineProps({
    title: { type: String, required: true },
    description: { type: String, default: '' },
  })
</script>

<template>
  <header class="space-y-5 text-center sm:text-start">
    <h1 class="inline-block border-b-2 border-candy pb-1 text-4xl text-obsidian dark:text-snow">
      {{ title }}
    </h1>
    <p
      v-if="description"
      class="mx-auto max-w-2xl text-lg leading-relaxed text-obsidian/90 sm:mx-0 dark:text-snow/70">
      {{ description }}
    </p>
  </header>
</template>
