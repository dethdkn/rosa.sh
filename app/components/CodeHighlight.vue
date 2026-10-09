<script setup lang="ts">
  const props = defineProps({
    fileName: { type: String, required: true },
    code: { type: String, required: true },
    lang: { type: String, required: true },
  })

  const html = ref('')

  onNuxtReady(
    async () =>
      (html.value = await codeToHtml(props.code, {
        lang: props.lang,
        themes: { light: 'github-light-default', dark: 'tokyo-night' },
        // tokyo-night comments fail WCAG AA contrast
        colorReplacements: { 'tokyo-night': { '#51597d': '#8089b3' } },
      })),
  )
</script>

<template>
  <figure
    class="overflow-hidden rounded-2xl border border-obsidian/10 bg-white dark:border-snow/10 dark:bg-eclipse">
    <figcaption
      class="flex items-center gap-3 border-b border-obsidian/10 px-4 py-2.5 text-sm text-obsidian/90 dark:border-snow/10 dark:text-snow/70">
      <span aria-hidden="true" class="flex gap-1.5">
        <span class="size-3 rounded-full bg-candy" />
        <span class="size-3 rounded-full bg-candy/60" />
        <span class="size-3 rounded-full bg-candy/30" />
      </span>
      {{ fileName }}
    </figcaption>
    <div class="overflow-auto p-5 font-mono text-sm leading-relaxed **:font-mono">
      <ClientOnly>
        <div v-html="html" />
        <template #fallback>
          <pre><code>{{ code }}</code></pre>
        </template>
      </ClientOnly>
    </div>
  </figure>
</template>
