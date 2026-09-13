<script setup lang="ts">
import { PHONE_HREF } from '~/utils/contact'

defineProps<{
  location: string
}>()
</script>

<template>
  <a :href="PHONE_HREF" @click="trackClickToCall(location)">
    <slot>Zadzwoń</slot>
  </a>
</template>
