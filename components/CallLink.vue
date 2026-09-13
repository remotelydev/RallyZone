<script setup lang="ts">
import { PHONE_HREF } from '~/utils/contact'
</script>

<template>
  <a :href="PHONE_HREF">
    <slot>Zadzwoń</slot>
  </a>
</template>
