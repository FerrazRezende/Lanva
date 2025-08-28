<template>
  <v-app>
    <RouterView />
  </v-app>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<style>
.v-application {
  background: var(--bg) !important;
}

.v-main {
  background: var(--bg) !important;
}
</style>
