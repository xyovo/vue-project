<script setup lang="ts">
import Header from '@/layouts/root-layout/Header.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div class="pt-[60px]">
    <Header />
    <div class="p-4 w-full min-h-[calc(100vh-60px)] bg-slate-50 flex justify-center ">
      <div class="w-full max-w-[1200px] bg-white p-4 rounded">
        <RouterView />
      </div>
    </div>
  </div>
</template>
