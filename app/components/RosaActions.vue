<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-3 pt-4 md:justify-start">
    <NuxtLinkLocale
      to="/about"
      class="rounded-full bg-candy px-5 py-2 text-sm font-medium text-onyx shadow-[0_8px_24px_-10px] shadow-candy transition-all duration-300 hover:bg-bubblegum">
      {{ t('about') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale
      to="/certificates"
      class="rounded-full border border-candy/60 px-5 py-2 text-sm font-medium text-obsidian transition-all duration-300 hover:border-candy hover:bg-candy/10 hover:text-candy dark:text-snow dark:hover:text-candy">
      {{ t('certificates') }}
    </NuxtLinkLocale>
    <NuxtLinkLocale
      to="/projects"
      class="rounded-full border border-candy/60 px-5 py-2 text-sm font-medium text-obsidian transition-all duration-300 hover:border-candy hover:bg-candy/10 hover:text-candy dark:text-snow dark:hover:text-candy">
      {{ t('projects') }}
    </NuxtLinkLocale>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "about": "About me",
    "certificates": "Certificates",
    "projects": "Projects"
  },
  "pt": {
    "about": "Sobre mim",
    "certificates": "Certificados",
    "projects": "Projetos"
  }
}
</i18n>
