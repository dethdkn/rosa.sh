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
  <div class="flex flex-1 items-center justify-center px-6 py-16">
    <div class="flex flex-col items-center gap-10 md:flex-row md:gap-14">
      <div
        class="relative size-48 shrink-0 cursor-pointer md:size-56"
        role="button"
        @click="pinkBlast"
        @keydown.enter="pinkBlast">
        <div aria-hidden="true" class="absolute -inset-4 rounded-full bg-candy/25 blur-2xl" />
        <NuxtImg
          src="/gsr.webp"
          alt="Gabriel Rosa"
          class="relative size-full rounded-full border-4 border-candy object-cover transition-transform duration-500 hover:scale-[1.03]"
          placeholder />
      </div>
      <div class="space-y-2 text-center md:text-start">
        <ClientOnly>
          <BlurReveal :delay="0.5">
            <RosaTitle />
            <RosaSubtitle />
            <RosaActions />
          </BlurReveal>
          <template #fallback>
            <RosaTitle class="noscript opacity-0" />
            <RosaSubtitle class="noscript opacity-0" />
            <RosaActions class="noscript opacity-0" />
          </template>
        </ClientOnly>
      </div>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Home",
    "subtitle": "Software Engineer & DevOps",
    "simple_im": "I'm",
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
