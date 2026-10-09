<script setup lang="ts">
  defineProps({
    title: { type: String, default: '' },
    badges: {
      type: Array as PropType<{ title: string; icon: string; color: string }[]>,
      required: true,
    },
    urls: {
      type: Array as PropType<{ url: string; external: boolean; icon: string; aria: string }[]>,
      required: true,
    },
    description: { type: String, default: '' },
  })

  const { proxy } = useScriptCloudflareWebAnalytics()
</script>

<template>
  <article
    class="flex h-full flex-col gap-4 rounded-2xl border border-obsidian/10 bg-milk/70 p-6 text-start transition-all duration-300 hover:-translate-y-0.5 hover:border-candy/60 hover:shadow-[0_10px_30px_-12px] hover:shadow-candy/40 dark:border-snow/10 dark:bg-eclipse/70 dark:hover:border-candy/50">
    <div class="flex items-start justify-between gap-4">
      <NuxtLink
        :to="urls?.[0]?.url"
        :external="urls?.[0]?.external"
        :target="urls?.[0]?.external ? '_blank' : undefined"
        class="border-b-2 border-transparent text-xl font-medium text-obsidian transition-all duration-300 hover:border-candy hover:text-candy dark:text-snow dark:hover:text-candy">
        {{ title }}
      </NuxtLink>
      <div class="flex shrink-0 items-center gap-2">
        <template v-for="url in urls" :key="url.url">
          <NuxtLink
            v-if="url.external"
            :to="url.url"
            external
            target="_blank"
            :aria-label="url.aria"
            class="flex text-2xl text-obsidian/90 transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:text-snow/70 dark:hover:text-candy">
            <Icon :name="url.icon" />
          </NuxtLink>
          <NuxtLinkLocale
            v-else
            :to="url.url"
            :aria-label="url.aria"
            class="flex text-2xl text-obsidian/90 transition-all duration-300 hover:text-candy hover:drop-shadow-candy dark:text-snow/70 dark:hover:text-candy">
            <Icon :name="url.icon" />
          </NuxtLinkLocale>
        </template>
      </div>
    </div>
    <p class="flex-1 leading-relaxed text-obsidian/90 dark:text-snow/75">
      {{ description }}
    </p>
    <div v-if="badges.length" class="flex flex-wrap gap-1.5">
      <Badge
        v-for="badge in badges"
        :key="badge.title"
        :title="badge.title"
        :icon="badge.icon"
        :color="badge.color" />
    </div>
  </article>
</template>
