<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="space-x-2">
    <RouterLink to="/home">home</RouterLink>
    <RouterLink to="/about">about</RouterLink>
  </div>
  <RouterView />
</template>

<style scoped></style>
