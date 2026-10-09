<script setup lang="ts">
  defineOptions({ name: 'DefaultLayout' })
</script>

<template>
  <div class="relative isolate flex min-h-screen flex-col">
    <div
      aria-hidden="true"
      class="pointer-events-none absolute inset-x-0 top-0 -z-10 h-128 bg-[radial-gradient(60%_100%_at_50%_0%,color-mix(in_srgb,var(--color-candy)_16%,transparent),transparent)]" />
    <Nav />
    <ClientOnly>
      <Cursor />
    </ClientOnly>
    <main class="flex flex-1 flex-col">
      <slot />
    </main>
    <Footer />
  </div>
</template>
