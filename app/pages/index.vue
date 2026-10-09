<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })
  const { proxy } = useScriptCloudflareWebAnalytics()

  useHead({ title: t('title') })

  useSeoMeta({ description: t('subtitle') })

  defineOgImage('Home.takumi', {
    title: t('title'),
    im: t('simple_im'),
    aka: t('aka'),
    subtitle: t('subtitle'),
  })

  function pinkBlast(): void {
    const { cancel } = emojiBlasts({
      interval: 40,
      emojis: ['🌹', '🌸', '💗', '💓', '💖', '💕', '💞', '💝', '🦩', '💘', '🩷', '🌷', '🌺'],
    })
    setTimeout(cancel, 3000)
  }

  onKeyStroke(' ', () => pinkBlast())
</script>

<template>
  <div class="flex flex-wrap items-center justify-center space-x-6 pt-16">
    <div
      class="relative size-48 cursor-pointer overflow-hidden rounded-full border-4 border-candy"
      role="button"
      @click="pinkBlast"
      @keydown.enter="pinkBlast">
      <NuxtImg
        src="/gsr.webp"
        alt="Gabriel Rosa"
        class="absolute top-0 left-0 size-full rounded-full object-cover"
        placeholder />
    </div>
    <div class="space-y-2 text-center">
      <ClientOnly>
        <BlurReveal :delay="0.5">
          <RosaTitle />
          <RosaSubtitle />
        </BlurReveal>
        <template #fallback>
          <RosaTitle class="noscript opacity-0" />
          <RosaSubtitle class="noscript opacity-0" />
        </template>
      </ClientOnly>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Home",
    "subtitle": "Software Engineer & DevOps",
    "simple_im": "Im",
    "aka": "aka"
  },
  "pt": {
    "title": "Início",
    "subtitle": "Engenheiro de Software & DevOps",
    "simple_im": "Eu sou o",
    "aka": "ou"
  }
}
</i18n>
