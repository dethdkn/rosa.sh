<script setup lang="ts">
  const { proxy } = useScriptCloudflareWebAnalytics()

  const { siteVersion } = useRuntimeConfig().public

  const socials = ref([
    {
      url: 'mailto:gabriel@rosa.sh',
      icon: 'iconoir:at-sign',
      name: 'Email',
    },
    {
      url: 'https://github.com/dethdkn',
      icon: 'iconoir:github',
      name: 'Github',
    },
    {
      url: 'https://www.linkedin.com/in/gabrielsdrosa',
      icon: 'iconoir:linkedin',
      name: 'Linkedin',
    },
    {
      url: 'https://www.youtube.com/@gabrielsdrosa',
      icon: 'iconoir:youtube',
      name: 'Youtube',
    },
    {
      url: 'https://www.behance.net/dethdkn',
      icon: 'iconoir:behance',
      name: 'Behance',
    },
    {
      url: 'https://www.instagram.com/deth.gsr',
      icon: 'iconoir:instagram',
      name: 'Instagram',
    },
  ])
</script>

<template>
  <footer class="mt-20 border-t border-obsidian/10 pt-12 pb-10 dark:border-snow/10">
    <div class="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6">
      <div class="flex flex-wrap items-center justify-center gap-3">
        <NuxtLink
          v-for="social in socials"
          :key="social.url"
          :to="social.url"
          target="_blank"
          :aria-label="social.name"
          class="flex size-12 items-center justify-center rounded-full border border-obsidian/10 text-obsidian transition-all duration-300 hover:-translate-y-0.5 hover:border-candy hover:text-candy hover:drop-shadow-candy dark:border-snow/10 dark:text-snow dark:hover:border-candy dark:hover:text-candy">
          <Icon :name="social.icon" size="1.5rem" />
        </NuxtLink>
      </div>
      <div
        class="flex flex-col items-center justify-center space-y-2 text-sm text-obsidian/90 dark:text-snow/70">
        <p class="flex items-center justify-center">
          <Icon name="iconoir:copyright" :size="14" />&nbsp;
          {{ new Date().getFullYear() }}
          <span class="mx-2">—</span>
          Gabriel 'DethDKN' Rosa
          <span class="mx-2">—</span>
          v{{ siteVersion }}
        </p>
        <p class="flex flex-col items-center justify-center md:flex-row">
          <span>
            Powered by&nbsp;
            <NuxtLink
              to="https://nuxt.com"
              external
              target="_blank"
              class="text-obsidian transition-all duration-300 hover:drop-shadow-nuxt dark:text-nuxt dark:hover:drop-shadow-nuxtWhite">
              <Icon name="logos:nuxt-icon" :size="12" />
              <span>&nbsp;Nuxt</span>
            </NuxtLink>
          </span>
          <span class="hidden md:mx-2 md:block">—</span>
          <span>
            Hosted on&nbsp;
            <NuxtLink
              to="https://www.cloudflare.com/"
              external
              target="_blank"
              class="text-obsidian transition-all duration-300 hover:drop-shadow-cloudflare dark:text-cloudflare">
              <Icon name="logos:cloudflare-icon" :size="12" />
              <span>&nbsp;Cloudflare</span>
            </NuxtLink>
          </span>
        </p>
      </div>
    </div>
  </footer>
</template>
