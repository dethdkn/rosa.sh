<script setup lang="ts">
  defineProps({
    title: { type: String, default: 'Gabriel Rosa' },
    subtitle: { type: String, default: 'Software Engineer & DevOps' },
    im: { type: String, default: "I'm" },
    aka: { type: String, default: 'aka' },
  })

  const name = 'Gabriel Rosa'
</script>

<template>
  <div class="relative flex h-full w-full items-center justify-center bg-onyx px-20">
    <span class="absolute top-16 right-20 text-[28px] text-candy">rosa.sh</span>

    <div class="flex items-center">
      <div class="flex rounded-full border-4 border-candy p-2">
        <img src="/gsr.png" alt="Gabriel Rosa" class="h-64 w-64 rounded-full" />
      </div>

      <div class="ml-16 flex flex-col">
        <span class="text-[34px] text-snow/70">{{ im }}</span>
        <span class="mt-1 border-b-4 border-candy pb-2 text-[80px] leading-none text-snow">{{
          name
        }}</span>
        <div class="mt-5 flex items-center text-[40px] text-snow">
          <span class="mr-4 text-snow/70">{{ aka }}</span>
          <span class="border-b-4 border-candy pb-1">Deth</span>
        </div>
        <span class="mt-8 text-[30px] text-snow/70">{{ subtitle }}</span>
      </div>
    </div>

    <div class="absolute bottom-0 left-0 h-2 w-full bg-candy" />
  </div>
</template>
