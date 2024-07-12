import { ref } from "vue";
import { defineStore } from "pinia";

export const useConfigStore = defineStore("config", () => {
  const loading = ref(true);
  function setLoading(value: boolean) {
    loading.value = value;
  }

  return { loading, setLoading };
});
