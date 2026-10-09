<script setup lang="ts">
  defineProps({
    title: { type: String, default: 'Gabriel Rosa' },
    description: { type: String, default: '' },
  })

  const stack = [
    { src: '/stack/vue.png', alt: 'VueJS' },
    { src: '/stack/nuxt.png', alt: 'NuxtJS' },
    { src: '/stack/typescript.png', alt: 'Typescript' },
    { src: '/stack/tailwind.png', alt: 'TailwindCSS' },
    { src: '/stack/nginx.png', alt: 'Nginx' },
    { src: '/stack/mongo.png', alt: 'MongoDB' },
  ]
</script>

<template>
  <div class="relative flex h-full w-full flex-col bg-onyx px-20 pt-16 pb-18">
    <div class="flex w-full items-center justify-between">
      <div class="flex items-center">
        <img
          src="/gsr.png"
          alt="Gabriel Rosa"
          class="h-18 w-18 rounded-full border-2 border-candy" />
        <span class="ml-5 text-[30px] text-snow">Gabriel Rosa</span>
      </div>
      <span class="text-[28px] text-candy">rosa.sh</span>
    </div>

    <div class="flex flex-1 flex-col justify-center">
      <h1 class="text-[76px] leading-tight text-snow">
        {{ title }}
      </h1>
      <div class="mt-6 h-1.5 w-36 rounded-full bg-candy" />
      <p v-if="description" class="mt-6 text-[28px] text-snow/70">
        {{ description }}
      </p>
    </div>

    <div class="flex items-center">
      <div
        v-for="tech in stack"
        :key="tech.alt"
        class="mr-5 flex h-24 w-24 items-center justify-center rounded-3xl border-2 border-snow/10 bg-eclipse">
        <img :src="tech.src" :alt="tech.alt" class="h-14 w-14" />
      </div>
    </div>

    <div class="absolute bottom-0 left-0 h-2 w-full bg-candy" />
  </div>
</template>
