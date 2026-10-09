<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Techs.takumi', { title: t('title'), description: t('description') })

  const { data: certificates } = await useFetch('/api/certificates', {
    default: () => [] as Certificates[],
  })
</script>

<template>
  <div class="mx-auto w-full max-w-6xl space-y-12 px-6 py-12 sm:px-10 lg:px-20">
    <PageHeader :title="t('title')" :description="t('description')" />
    <div class="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      <List
        v-for="{ href, title, subtitle, concluded, badges } in certificates"
        :key="href"
        :title
        :badges
        :urls="[{ url: href, icon: 'iconoir:doc-star-in', external: true, aria: 'PDF' }]"
        :description="`${subtitle} • ${concluded}`"
        data-aos="fade-up" />
    </div>
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
    "description": "Explore minha coleção de certificados de cursos, eles mostram meu compromisso com o aprendizado e o crescimento."
  }
}
</i18n>
