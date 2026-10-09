<script setup lang="ts">
  useI18n({ useScope: 'local' })
</script>

<template>
  <i18n-t keypath="im" tag="h1" class="mb-2 text-4xl text-obsidian dark:text-snow">
    <template #name>
      <span class="border-b-2 border-candy">Gabriel Rosa</span>
    </template>
    <template #nickname>
      <span class="border-b-2 border-candy">Deth</span>
    </template>
  </i18n-t>
</template>

<i18n lang="json">
{
  "en": {
    "im": "I'm {name} aka {nickname}"
  },
  "pt": {
    "im": "Eu sou o {name} ou {nickname}"
  }
}
</i18n>
