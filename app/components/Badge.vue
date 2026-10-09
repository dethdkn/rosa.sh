<script setup lang="ts">
  defineProps({
    title: { type: String, required: true },
    icon: { type: String, required: true },
    color: { type: String, required: true },
  })
</script>

<template>
  <span
    class="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px] leading-none font-medium text-obsidian dark:text-snow"
    :style="{
      borderColor: `color-mix(in srgb, ${color} 45%, transparent)`,
      backgroundColor: `color-mix(in srgb, ${color} 12%, transparent)`,
    }">
    <Icon :name="icon" :size="11" :style="{ color }" />
    <span>{{ title }}</span>
  </span>
</template>
