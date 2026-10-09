<script setup lang="ts">
  const { t } = useI18n({ useScope: 'local' })

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Techs.takumi', { title: t('title') })

  const localePath = useLocalePath()

  const posts = computed(() => [
    {
      title: t('posts.primevue_locale_dynamic.title'),
      badges: [
        { title: 'Vue.JS', icon: 'vscode-icons:file-type-vue', color: '#41B883' },
        { title: 'Nuxt.JS', icon: 'vscode-icons:file-type-nuxt', color: '#2DDC82' },
        { title: 'PrimeVue', icon: 'prime:prime', color: '#41B883' },
        { title: 'i18n', icon: 'material-symbols:language-chinese-dayi', color: '#FCC72B' },
      ],
      urls: [
        {
          url: localePath('/blog/how-to-switch-primevue-locale-dynamically'),
          external: false,
          icon: 'iconoir:open-in-browser',
          aria: 'URL',
        },
      ],
      description: t('posts.primevue_locale_dynamic.description'),
      locale: true,
      self: true,
    },
    {
      title: t('posts.customizable_multiboot_pendrive.title'),
      badges: [{ title: 'Ventoy', icon: 'material-symbols:usb', color: '#FCD134' }],
      urls: [
        {
          url: localePath('/blog/customizable-multiboot-pendrive'),
          external: false,
          icon: 'iconoir:open-in-browser',
          aria: 'URL',
        },
      ],
      description: t('posts.customizable_multiboot_pendrive.description'),
      locale: true,
      self: true,
    },
    {
      title: t('posts.installing_arch_linux.title'),
      badges: [
        { title: 'Linux', icon: 'devicon:linux', color: '#FCD134' },
        { title: 'Arch', icon: 'devicon:archlinux', color: '#2A90CF' },
      ],
      urls: [
        {
          url: localePath('/blog/installing-arch-linux'),
          external: false,
          icon: 'iconoir:open-in-browser',
          aria: 'URL',
        },
      ],
      description: t('posts.installing_arch_linux.description'),
      locale: true,
      self: true,
    },
  ])
</script>

<template>
  <div class="mx-auto max-w-7xl space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
    <h1 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
      {{ t('title') }}
    </h1>
    <List
      v-for="{ title, badges, urls, description, locale, self } in posts"
      :key="title"
      :title
      :badges
      :urls
      :description
      :locale
      :self
      data-aos="fade-right" />
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "Blog",
    "description": "Here I share tips and solutions for programming challenges. Discover practical insights and effective approaches to enhance your skills.",
    "posts": {
      "primevue_locale_dynamic": {
        "title": "How to switch PrimeVue locale dynamically",
        "description": "Learn to seamlessly adapt your PrimeVue application to different languages."
      },
      "customizable_multiboot_pendrive": {
        "title": "Customizable Multiboot Pendrive (to show off to your IT friends and not teach them how to do it)",
        "description": "Create your personalized Multiboot USB in minutes! Impress your IT friends with this super easy tutorial."
      },
      "installing_arch_linux": {
        "title": "Installing Arch Linux (the easiest YouTube guide)",
        "description": "Effortlessly install Arch Linux with this YouTube guide, simplifying the process for a seamless setup."
      }
    }
  },
  "pt": {
    "title": "Blog",
    "description": "Aqui compartilho dicas e soluções para os desafios da programação. Encontre insights práticos e abordagens eficazes para aprimorar suas habilidades.",
    "posts": {
      "primevue_locale_dynamic": {
        "title": "Como Alternar Dinamicamente o locale do PrimeVue",
        "description": "Aprenda a adaptar perfeitamente a sua aplicação PrimeVue a diferentes idiomas."
      },
      "customizable_multiboot_pendrive": {
        "title": "Pendrive Multiboot Personalizável (pra mostrar pros seus amiguinhos do TI e não ensinar a fazer)",
        "description": "Crie seu Pendrive Multiboot personalizado em minutos! Surpreenda os amigos do TI com este tutorial super fácil."
      },
      "installing_arch_linux": {
        "title": "Instalando o Arch Linux (o guia mais fácil do youtube)",
        "description": "Instale o Arch Linux facilmente com este guia no YouTube, simplificando o processo para uma configuração sem complicações."
      }
    }
  }
}
</i18n>
