<script setup lang="ts">
  const { t, locale } = useI18n({ useScope: 'local' })

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Techs.takumi', { title: t('title') })

  const { data: projects } = await useFetch('/api/projects', {
    default: () => [] as Projects[],
  })
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
      {{ t('title') }}
    </h1>
    <List
      v-for="{ title, badges, urls, description } in projects"
      :key="title"
      :title
      :badges
      :urls
      :description="description[locale === 'pt' ? 'pt' : 'en']"
      data-aos="fade-right" />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Projects",
    "description": "Explore my projects, built with Nuxt, Vue, Tailwind CSS, and other cool technologies."
  },
  "pt": {
    "title": "Projetos",
    "description": "Explore meus projetos, elaborados com Nuxt, Vue, Tailwind CSS e outras tecnologias interessantes."
  }
}
</i18n>
