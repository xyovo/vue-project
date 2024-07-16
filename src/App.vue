<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useConfigStore } from "@/stores/config";
import { storeToRefs } from 'pinia';
import { ElConfigProvider } from 'element-plus'
import zhCn from 'element-plus/es/locale/lang/zh-cn'

const configStore = useConfigStore()
const { loading } = storeToRefs(configStore)

</script>

<template>
  <el-config-provider :locale="zhCn">
    <div v-show="loading">
      <div class="w-full h-screen xyc">
        <a-spin :size="30" />
      </div>
    </div>
    <div v-show="!loading">
      <router-view />
    </div>

  </el-config-provider>
</template>