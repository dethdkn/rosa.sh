<script setup lang="ts">
  const props = defineProps({
    title: { type: String, default: 'Gabriel Rosa' },
    description: { type: String, default: '' },
  })

  const titleSize = computed(() => {
    if (props.title.length <= 24) return '76px'
    if (props.title.length <= 60) return '58px'
    return '48px'
  })
</script>

<template>
  <div class="relative flex h-full w-full flex-col bg-onyx px-20 pt-16 pb-18">
    <img
      src="/logo.webp"
      alt=""
      class="absolute top-[50%] right-[-60px] h-105 w-105 transform-[translate(0,-50%)_rotate(-12deg)] opacity-10" />

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

    <div class="flex w-[85%] flex-1 flex-col justify-center">
      <h1 class="leading-tight text-snow" :style="{ fontSize: titleSize }">
        {{ title }}
      </h1>
      <div class="mt-7 h-1.5 w-36 rounded-full bg-candy" />
      <p v-if="description" class="mt-7 text-[28px] leading-snug text-snow/70">
        {{ description }}
      </p>
    </div>

    <div class="absolute bottom-0 left-0 h-2 w-full bg-candy" />
  </div>
</template>
