<script setup lang="ts">
  defineProps({
    options: {
      type: Array as PropType<{ text: string; icon: string; click: () => void; active: boolean }[]>,
      required: true,
    },
    iconSize: { type: Number, default: 10 },
    label: { type: String, required: true },
  })

  const state = ref(false)
</script>

<template>
  <DropdownMenuRoot v-model:open="state">
    <DropdownMenuTrigger class="flex items-center justify-center" :aria-label="label">
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent
        class="z-50 min-w-40 rounded-xl border border-obsidian/10 bg-milk/95 p-1.5 shadow-lg backdrop-blur-md will-change-[opacity,transform] outline-none data-[side=bottom]:animate-slideUpAndFade dark:border-snow/10 dark:bg-eclipse/95"
        :side-offset="5">
        <DropdownMenuItem
          v-for="{ text, icon, click, active } in options"
          :key="text"
          :value="text"
          :disabled="active"
          class="relative flex h-8 cursor-pointer items-center space-x-2 rounded-lg px-2 text-sm leading-none text-obsidian outline-none select-none data-disabled:cursor-not-allowed data-disabled:text-candy data-highlighted:bg-candy data-highlighted:text-onyx dark:text-snow dark:data-disabled:text-candy"
          @click="click">
          <Icon :name="icon" :size="iconSize" />
          <span>{{ text }}</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>
