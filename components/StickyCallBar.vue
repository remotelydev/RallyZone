<script setup lang="ts">
import { PHONE_DISPLAY } from '~/utils/contact'
</script>

<template>
  <div
    class="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-gray-950/95 p-3 backdrop-blur sm:hidden"
    style="padding-bottom: max(0.75rem, env(safe-area-inset-bottom))"
  >
    <CallLink
      class="flex min-h-12 w-full items-center justify-center rounded-2xl bg-[#ec1c24] px-5 py-3 text-lg font-semibold text-white hover:bg-[#c4161d]"
    >
      Zadzwoń {{ PHONE_DISPLAY }}
    </CallLink>
  </div>
</template>
