<script setup lang="ts">
  // No-useless-escape false positive
  /* oxlint-disable no-useless-escape */

  const { t } = useI18n({ useScope: 'local' })

  useHead({ title: t('title') })

  useSeoMeta({ description: t('description') })

  defineOgImage('Simple.takumi', { title: t('title') })

  const code1 = `export default defineNuxtConfig({
  i18n: {
    baseUrl: 'https://example.com/',
    defaultLocale: 'en',
    langDir: 'locales',
    locales: [
      { code: 'en', iso: 'en-US', name: 'English (US)', file: 'en.ts' },
      { code: 'pt', iso: 'pt-BR', name: 'Português (BR)', file: 'pt.ts' },
    ],
  },
})`

  const code2 = `{ "type": 0, "start": 0, "end": 2, "loc": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 1, "column": 3, "offset": 2 }, "source": "Fr" }, "body": { "type": 2, "start": 0, "end": 2, "loc": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 1, "column": 3, "offset": 2 } }, "items": [ { "type": 3, "start": 0, "end": 2, "loc": { "start": { "line": 1, "column": 1, "offset": 0 }, "end": { "line": 1, "column": 3, "offset": 2 } } } ], "static": "Fr" } }`

  const code3 = `<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

function changeLang() {
  const primeConfig = usePrimeVue()
  // Warns [Vue warn]: inject() can only be used inside setup() or functional components.
  // Throws Uncaught Error: PrimeVue is not installed!
  if (locale.value === 'en') {
    setLocale('pt')
    primeConfig.config.locale = primept
  }
  else {
    setLocale('en')
    primeConfig.config.locale = primeen
  }
}
<\/script>`

  const code4 = `<script setup lang="ts">
const { locale, setLocale, t } = useI18n()

const primeConfig = usePrimeVue()

onMounted(() => {
  if (locale.value === 'en')
    primeConfig.config.locale = primeen
  else
    primeConfig.config.locale = primept
})

function changeLang() {
  if (locale.value === 'en') {
    setLocale('pt')
    primeConfig.config.locale = primept
  }
  else {
    setLocale('en')
    primeConfig.config.locale = primeen
  }
}
<\/script>

<template>
  <button aria-label="Switch Language" @click="changeLang">
    <Icon
      :name="locale === 'pt' ? 'openmoji:flag-brazil' : 'openmoji:flag-united-states'"
      size="24"
    />
  <\/button>
<\/template>`
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="space-y-10 px-20 py-5 text-center sm:text-start lg:space-y-20">
      <h1 class="inline border-b-2 border-candy text-4xl text-obsidian dark:text-snow">
        {{ t('title') }}
      </h1>
    </div>
    <div class="mt-10 space-y-5 px-10 text-obsidian dark:text-snow">
      <p>{{ t('paragraph1') }}</p>
      <p>{{ t('paragraph2') }}</p>
      <p>{{ t('paragraph3') }}</p>
      <NuxtLink
        to="https://github.com/primefaces/primelocale"
        external
        target="_blank"
        class="inline-block border-b-2 text-obsidian hover:border-candy hover:text-candy dark:text-snow hover:dark:border-candy dark:hover:text-candy">
        primefaces / primelocale
      </NuxtLink>
      <p>{{ t('paragraph4') }}</p>
      <p>{{ t('paragraph5') }}</p>
      <hr class="my-8 h-px border-0 bg-gray-300 dark:bg-gray-600" />
      <p>{{ t('paragraph6') }}</p>
      <CodeHighlight file-name="nuxt.config.ts" :code="code1" lang="ts" />
      <p>{{ t('paragraph7') }}</p>
      <pre>
/locales
----/en.ts
----/pt.ts
----/primeEN.ts
----/primePT.ts
      </pre>
      <p>{{ t('paragraph8') }}</p>
      <CodeHighlight file-name="Primevue Component Text" :code="code2" lang="json" />
      <p>{{ t('paragraph9') }}</p>
      <hr class="my-8 h-px border-0 bg-gray-300 dark:bg-gray-600" />
      <p>{{ t('paragraph10') }}</p>
      <CodeHighlight file-name="components/Navbar.vue" :code="code3" lang="vue" />
      <p>{{ t('paragraph11') }}</p>
      <CodeHighlight file-name="components/Navbar.vue" :code="code4" lang="vue" />
      <p>{{ t('paragraph12') }}</p>
      <p>{{ t('final_paragraph') }}</p>
    </div>
  </div>
</template>

<i18n lang="json">
{
  "en": {
    "title": "How to switch PrimeVue locale dynamically",
    "description": "Learn to seamlessly adapt your PrimeVue application to different languages.",
    "paragraph1": "Today, while working on a project built with the Nuxt.js, I found myself in the need to implement internationalization (i18n) to support both Portuguese and English languages. To achieve this goal, I integrated the {'@'}nuxtjs/i18n module, which facilitates the localization of the application.",
    "paragraph2": "Additionally, the project makes use of nuxt-primevue, a comprehensive set of components for Nuxt. In order to provide a fully localized experience, it was necessary to configure not only the translation of the application but also the components provided by PrimeVue.",
    "paragraph3": "Fortunately, PrimeVue already offers localization files for various languages in its official repository, simplifying the integration with different language settings.",
    "paragraph4": "The configuration for internationalization in PrimeVue is relatively straightforward. However, an additional challenge arose: the need to dynamically change the language of PrimeVue without reloading the page. While {'@'}nuxtjs/i18n enabled this dynamic language switching for the application, achieving the same functionality for PrimeVue components posed some difficulties.",
    "paragraph5": "This article aims to share the challenges encountered during this process and provide solutions for these specific problems. The detailed approach outlined here is intended to facilitate the successful implementation of internationalization for both the application and PrimeVue components, enabling a seamlessly localized and dynamic user experience.",
    "paragraph6": "One of the initial issues I encountered was actually related to {'@'}nuxtjs/i18n. The module configuration was initially set up as follows:",
    "paragraph7": "As you can see, the i18n was configured to read the 'locales' folder, and one detail about this module that I wasn't aware of is that it reads and modifies all files contained in that folder. Unaware of this detail, I placed the PrimeVue locales within this folder in the following manner:",
    "paragraph8": "In this manner, when applying one of these locales to PrimeVue, the components text appeared as follows:",
    "paragraph9": "As mentioned above, i18n will modify all files in the 'locale' folder, including the PrimeVue locale. So, the first solution is NOT to place the PrimeVue locale in the same folder as the i18n module. In my case, I placed it in the 'utils' folder, allowing it to be automatically imported when I dynamically changed the locale.",
    "paragraph10": "The second issue occurred because I was not calling usePrimeVue() at the top of the setup block; instead, I placed it inside a function. In summary, if your code is structured in the following way, you will encounter an error, as usePrimeVue() utilizes Vue's inject(), which is only available at the top of the setup block.",
    "paragraph11": "The solution is to follow the code example below, executing usePrimeVue at the top of the setup block and assigning its value to a variable that can be used later within the function responsible for changing the language. Additionally, it is possible to change the language of i18n simultaneously.",
    "paragraph12": "And voilà, your code is now working perfectly, with the language dynamically changing in both the i18n and PrimeVue modules! 😊",
    "final_paragraph": "If you have any questions or would like to get in touch, feel free to reach out to me on any of the social media platforms listed below. Thank you very much for reading!"
  },
  "pt": {
    "title": "Como Alternar Dinamicamente o locale do PrimeVue",
    "description": "Aprenda a adaptar perfeitamente a sua aplicação PrimeVue a diferentes idiomas.",
    "paragraph1": "Hoje, enquanto trabalhava em um projeto desenvolvido com o Nuxt.js, deparei-me com a necessidade de implementar a internacionalização (i18n) para suportar os idiomas português e inglês. Para alcançar esse objetivo, integrei o módulo {'@'}nuxtjs/i18n, que facilita a localização do aplicativo.",
    "paragraph2": "Além disso, o projeto faz uso do nuxt-primevue, um conjunto abrangente de componentes para Nuxt. A fim de proporcionar uma experiência totalmente localizada, foi necessário configurar não apenas a tradução do aplicativo, mas também dos componentes fornecidos pelo PrimeVue.",
    "paragraph3": "Felizmente, o PrimeVue já oferece arquivos de localização para vários idiomas em seu repositório oficial, facilitando a integração com diferentes línguas.",
    "paragraph4": "A configuração da internacionalização para o PrimeVue é relativamente simples. No entanto, surgiu um desafio adicional: a necessidade de alterar dinamicamente o idioma do PrimeVue, sem a necessidade de recarregar a página. Enquanto o {'@'}nuxtjs/i18n possibilitava essa troca dinâmica de idiomas para o aplicativo, a mesma funcionalidade para o PrimeVue apresentou algumas dificuldades.",
    "paragraph5": "Este artigo visa compartilhar os desafios encontrados durante esse processo e fornecer soluções para esses problemas específicos. A abordagem detalhada aqui visa facilitar a implementação bem-sucedida da internacionalização tanto para o aplicativo quanto para os componentes do PrimeVue, permitindo uma experiência de usuário perfeitamente localizada e dinâmica.",
    "paragraph6": "Um dos primeiros problemas que encontrei estava, na verdade, relacionado ao {'@'}nuxtjs/i18n. A configuração do módulo estava inicialmente assim:",
    "paragraph7": "Como você pode perceber, o i18n estava configurado para ler a pasta 'locales', e um dos detalhes desse módulo que eu não sabia é que ele lê e modifica todos os arquivos contidos nessa pasta. Por não estar ciente desse detalhe, coloquei os locales do PrimeVue dentro dessa pasta da seguinte forma:",
    "paragraph8": "Desta forma, ao aplicar um desses locales no PrimeVue, o texto dos componentes ficavam da seguinte forma:",
    "paragraph9": "Como mencionado anteriormente, o i18n irá modificar todos os arquivos na pasta \"locale\", inclusive o locale do PrimeVue. Portanto, a primeira solução é NÃO colocar o locale do PrimeVue na mesma pasta do módulo i18n. No meu caso, optei por colocá-lo na pasta 'utils', para que fosse automaticamente importado quando eu alterasse dinamicamente o locale.",
    "paragraph10": "O segundo problema ocorreu porque eu não estava chamando o usePrimeVue() no topo do bloco setup, mas sim, dentro de uma função. Resumindo o problema, se o seu código estiver da seguinte forma, você encontrará um erro, pois o usePrimeVue() utiliza o inject() do Vue, que está disponível apenas no topo do bloco setup.",
    "paragraph11": "A solução é realizar conforme exemplificado no código abaixo, executando o usePrimeVue no início do bloco setup e atribuindo o seu valor a uma variável que pode ser utilizada posteriormente dentro da função responsável por alterar o idioma. Além disso, é possível aproveitar para modificar o idioma do i18n.",
    "paragraph12": "E voilà, seu código agora estará funcionando perfeitamente, com o idioma sendo alterado dinamicamente, tanto no módulo do i18n quanto no do PrimeVue! 😊",
    "final_paragraph": "Se você tiver alguma dúvida ou quiser entrar em contato, sinta-se à vontade para me encontrar em qualquer uma das redes sociais listadas abaixo. Muito obrigado por ler!"
  }
}
</i18n>
