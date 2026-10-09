<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })
  const { proxy } = useScriptCloudflareWebAnalytics()

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Simple.takumi', { title: t('title'), description: t('description') })
</script>

<template>
  <article class="mx-auto w-full max-w-4xl px-6 py-12 sm:px-10">
    <PageHeader :title="t('title')" :description="t('description')" />
    <div class="mt-12 space-y-6 text-lg leading-relaxed text-obsidian/85 dark:text-snow/80">
      <div class="overflow-hidden rounded-2xl border border-obsidian/10 dark:border-snow/10">
        <ScriptYouTubePlayer video-id="nunxSwZ2xfA" />
      </div>
      <p>{{ t('paragraph1') }}</p>
      <div>
        <NuxtLink
          to="https://www.ventoy.net/en/download.html"
          external
          target="_blank"
          class="inline-block border-b-2 border-candy/50 text-obsidian transition-all duration-300 hover:border-candy hover:text-candy dark:text-snow dark:hover:text-candy">
          Download Ventoy
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="https://www.ventoy.net/en/plugin_theme.html"
          external
          target="_blank"
          class="inline-block border-b-2 border-candy/50 text-obsidian transition-all duration-300 hover:border-candy hover:text-candy dark:text-snow dark:hover:text-candy">
          Ventoy Theme Plugin
        </NuxtLink>
      </div>
      <div>
        <NuxtLink
          to="https://rosa.sh/downloads/lavenza.zip"
          target="_blank"
          class="inline-block border-b-2 border-candy/50 text-obsidian transition-all duration-300 hover:border-candy hover:text-candy dark:text-snow dark:hover:text-candy">
          Lavenza Theme
        </NuxtLink>
      </div>
      <p>{{ t('final_paragraph') }}</p>
    </div>
  </article>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Customizable Multiboot Pendrive (to show off to your IT friends and not teach them how to do it)",
    "description": "Create your personalized Multiboot USB in minutes! Impress your IT friends with this super easy tutorial.",
    "paragraph1": "Unfortunately, I didn't create an English version for this video. However, below, you'll find all the files used. Perhaps it's possible to follow along just by watching.",
    "final_paragraph": "If you have any questions or would like to get in touch, feel free to reach out to me on any of the social media platforms listed below. Thank you very much for reading!"
  },
  "pt": {
    "title": "Pendrive Multiboot Personalizável (pra mostrar pros seus amiguinhos do TI e não ensinar a fazer)",
    "description": "Crie seu Pendrive Multiboot personalizado em minutos! Surpreenda os amigos do TI com este tutorial super fácil.",
    "paragraph1": "Abaixo, você encontrará todos os arquivos utilizados neste vídeo.",
    "final_paragraph": "Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me encontrar em qualquer uma das redes sociais listadas abaixo. Muito obrigado por ler!"
  }
}
</i18n>
