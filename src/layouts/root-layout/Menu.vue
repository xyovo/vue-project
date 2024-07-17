<template>
  <div :class="[
    mode === 'horizontal' ? 'pc-menu-container' : 'mobile-menu-container',
  ]">
    <div v-for="menu in menus" key="{{menu.key}}" @click="changeMenu(menu.key)" :class="[
      mode === 'horizontal' ? 'pc-item' : 'mobile-item',
      checkedMenu === menu.key
        ? mode === 'horizontal'
          ? 'pc-active'
          : 'mobile-active'
        : '',
    ]">
      <span class="{{ menu.icon }}"></span>
      <div>{{ menu.title }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBreakPoint } from "@/hooks/useBreakPoint";
import { useConfigStore } from "@/stores/config";
import { onMounted, ref, watch } from "vue";
import { useRoute, useRouter } from "vue-router";

const { dt } = useBreakPoint();
const { setMobileMenuOpen } = useConfigStore();

const route = useRoute();
const router = useRouter();

const checkedMenu = ref("home");

const menus = ref([
  {
    key: "home",
    title: "首页",
    path: "/home",
    icon: "icon-[ri--home-line]",
  },
  {
    key: "message",
    title: "消息",
    path: "/message",
    icon: "icon-[iconoir--message]",
  },
  {
    key: "me",
    title: "我的",
    path: "/me",
    icon: "icon-[uil--user]",
  },
  {
    key: "create",
    title: "发布",
    path: "/create",
    icon: "icon-[mingcute--edit-line]",
  },
]);

const { mode } = withDefaults(
  defineProps<{ mode?: "horizontal" | "vertical" }>(),
  {
    mode: "horizontal",
  }
);

function refreshCheckedMenu(path: string) {
  // 刷新选中菜单
  checkedMenu.value = path.slice(1);
}

function changeMenu(key: string) {
  // 切换菜单
  checkedMenu.value = key;
  // 跳转路由
  router.push(menus.value.find((menu) => menu.key === key)?.path || "/");

  if (mode === "vertical") {
    setMobileMenuOpen(false);
  }
}

// 监听路由变化
watch(route, (newPath) => {
  refreshCheckedMenu(newPath.path);
});

onMounted(() => {
  refreshCheckedMenu(route.path);
});
</script>

<style scoped>
/* pc端 */
.pc-menu-container {
  @apply w-full h-full flex flex-1 justify-center space-x-8 px-4 pl-8;
}

.pc-item {
  @apply text-base cursor-pointer w-fit relative h-[60px] flex items-center justify-center;
}

.pc-active {
  @apply text-blue-600;
}

.pc-active::after {
  content: "";
  @apply block w-full h-0.5 bg-blue-600 absolute bottom-0;
}

/* 移动端 */
.mobile-menu-container {
  height: calc(100vh - 60px);
  @apply w-full flex flex-col justify-center items-center p-4 space-y-4 pb-[60px];
}

.mobile-item {
  @apply text-lg cursor-pointer w-full relative h-[60px] flex items-center justify-center;
}

.mobile-active {
  @apply text-blue-600 border-solid border-[1px] border-blue-600 rounded;
}
</style>
