import { ref } from "vue";
import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", () => {
  // 页面全局加载状态
  const loading = ref(true);
  // 移动端下拉菜单状态
  const mobileMenuOpen = ref(false);

  return {
    loading,
    setLoading: (value: boolean) => {
      loading.value = value;
    },
    mobileMenuOpen,
    setMobileMenuOpen: (value: boolean) => {
      mobileMenuOpen.value = value;
    },
  };
});
