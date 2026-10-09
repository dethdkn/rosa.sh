<script setup lang="ts">
  const { t, locale } = useI18n({ useScope: 'local' })

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Techs.takumi', { title: t('title'), description: t('description') })

  const { data: projects } = await useFetch('/api/projects', {
    default: () => [] as Projects[],
  })
</script>

<template>
  <div class="mx-auto w-full max-w-6xl space-y-12 px-6 py-12 sm:px-10 lg:px-20">
    <PageHeader :title="t('title')" :description="t('description')" />
    <div class="grid gap-6 md:grid-cols-2">
      <List
        v-for="{ title, badges, urls, description } in projects"
        :key="title"
        :title
        :badges
        :urls
        :description="description[locale === 'pt' ? 'pt' : 'en']"
        data-aos="fade-up" />
    </div>
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
