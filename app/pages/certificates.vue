<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Techs.takumi', { title: t('title') })

  const { data: certificates } = await useFetch('/api/certificates', {
    default: () => [] as Certificates[],
  })
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
      {{ t('title') }}
    </h1>
    <List
      v-for="{ href, title, subtitle, concluded, badges } in certificates"
      :key="href"
      :title
      :badges
      :urls="[{ url: href, icon: 'iconoir:doc-star-in', external: true, aria: 'PDF' }]"
      :description="`${subtitle} • ${concluded}`"
      data-aos="fade-right" />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Certificates",
    "description": "Explore my collection of course certificates, they show my commitment to learning and growth."
  },
  "pt": {
    "title": "Certificados",
    "description": "Explore minha coleção de certificados de cursos, eles mostra meu compromisso com o aprendizado e o crescimento."
  }
}
</i18n>
