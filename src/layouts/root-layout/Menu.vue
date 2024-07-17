<template>
  <div class="w-full h-ull flex flex-1 justify-center space-x-10 px-4">
    <div class="item active" key="home">首页</div>
    <div class="item" key="follow">关注</div>
    <div class="item" key="about">其他</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { useRoute } from "vue-router";

enum Menu {
  Home = "home",
  Follow = "follow",
  About = "about",
}

const checkedMenu = ref<Menu>(Menu.Home)

const { mode } = withDefaults(
  defineProps<{ mode?: "horizontal" | "vertical" }>(),
  {
    mode: "horizontal",
  }
);

// 获取当前路由
const route = useRoute();

function refreshCheckedMenu(path: string) {
  // 刷新选中菜单
  checkedMenu.value = path.slice(1) as Menu;
}

// 监听路由变化
watch(route, (newPath) => {
  refreshCheckedMenu(newPath.path)
});

onMounted(() => {
  refreshCheckedMenu(route.path)
});

</script>

<style scoped>
.item {
  @apply text-sm cursor-pointer;
}

.active {
  @apply text-slate-900 underline underline-offset-4;
}
</style>
