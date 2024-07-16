import { ref } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref<API.User | null>(null);
  function setUser(u: API.User | null) {
    user.value = u;
  }

  return { user, setUser };
});
