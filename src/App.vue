<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useConfigStore } from "@/stores/config";
import { storeToRefs } from 'pinia';
const configStore = useConfigStore()
const { loading } = storeToRefs(configStore)

</script>

<template>
  <div v-show="loading">
    <div class="w-full h-screen xyc">
      <div>loading</div>
    </div>
  </div>
  <div v-show="!loading">
    <router-view />
  </div>
</template>