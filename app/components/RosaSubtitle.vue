<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })
</script>

<template>
  <h2 class="text-lg text-obsidian/90 dark:text-snow/80">
    {{ t('subtitle') }}
  </h2>
</template>

<i18n lang="json">
{
  "en": {
    "subtitle": "Software Engineer & DevOps"
  },
  "pt": {
    "subtitle": "Engenheiro de Software & DevOps"
  }
}
</i18n>
