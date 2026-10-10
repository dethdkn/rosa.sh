<script setup lang="ts">
  import type { NuxtError } from '#app'

  const props = defineProps({
    error: { type: Object as PropType<NuxtError>, required: true },
  })

  const { t } = useI18n({ useScope: 'local' })
  const localePath = useLocalePath()
  const router = useRouter()

  const status = computed(() => props.error.status ?? 500)
  const isNotFound = computed(() => status.value === 404)

  useHead({ title: String(status.value) })

  async function goHome(): Promise<void> {
    await clearError({ redirect: localePath('/') })
  }

  async function goBack(): Promise<void> {
    await clearError()
    router.back()
  }
</script>

<template>
  <NuxtLayout>
    <div class="flex flex-1 items-center justify-center px-6 py-20">
      <div class="flex max-w-xl flex-col items-center text-center">
        <p class="text-sm tracking-[0.3em] text-obsidian uppercase dark:text-candy">
          {{ t('error') }}
        </p>
        <h1
          class="mt-4 inline-block border-b-4 border-candy pb-2 text-8xl font-medium text-obsidian sm:text-9xl dark:text-snow">
          {{ status }}
        </h1>
        <h2 class="mt-10 text-2xl text-obsidian dark:text-snow">
          {{ isNotFound ? t('not_found') : t('generic') }}
        </h2>
        <p class="mt-3 text-lg leading-relaxed text-obsidian/90 dark:text-snow/70">
          {{ isNotFound ? t('not_found_description') : t('generic_description') }}
        </p>
        <p
          v-if="error.message"
          class="mt-6 max-w-full truncate rounded-full border border-obsidian/10 bg-milk/70 px-4 py-1.5 font-mono text-xs text-obsidian/90 dark:border-snow/10 dark:bg-eclipse/70 dark:text-snow/70">
          {{ error.message }}
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            class="rounded-full bg-candy px-5 py-2 text-sm font-medium text-onyx shadow-[0_8px_24px_-10px] shadow-candy transition-all duration-300 hover:bg-bubblegum"
            @click="goHome">
            {{ t('home') }}
          </button>
          <button
            class="rounded-full border border-candy/60 px-5 py-2 text-sm font-medium text-obsidian transition-all duration-300 hover:border-candy hover:bg-candy/10 hover:text-candy dark:text-snow dark:hover:text-candy"
            @click="goBack">
            {{ t('back') }}
          </button>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<i18n lang="json">
{
  "en": {
    "error": "Error",
    "not_found": "Page not found",
    "not_found_description": "The page you're looking for doesn't exist or was moved.",
    "generic": "Something went wrong",
    "generic_description": "An unexpected error happened. Please try again in a moment.",
    "home": "Back to home",
    "back": "Go back"
  },
  "pt": {
    "error": "Erro",
    "not_found": "Página não encontrada",
    "not_found_description": "A página que você procura não existe ou foi movida.",
    "generic": "Algo deu errado",
    "generic_description": "Aconteceu um erro inesperado. Tente novamente em instantes.",
    "home": "Voltar ao início",
    "back": "Voltar"
  }
}
</i18n>
