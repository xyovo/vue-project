<script setup lang="ts">
import { useBreakPoint } from "@/hooks/useBreakPoint";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { Drawer } from "@arco-design/web-vue";
import { useConfigStore } from "@/stores/config";
import { storeToRefs } from "pinia";
import Menu from './Menu.vue'
import Logo from "@/components/Logo.vue";
import { watch } from "vue";

const { setUser } = useUserStore();
const { setMobileMenuOpen } = useConfigStore()
const { mobileMenuOpen } = storeToRefs(useConfigStore())
const { dt } = useBreakPoint();

const router = useRouter();
/**
 * 退出登录
 */
function logout() {
  localStorage.removeItem("Authorization");
  setUser(null);
  router.replace("/login");
}

watch(dt, newDt => {
  if (newDt !== 'mobile' && mobileMenuOpen.value) {
    setMobileMenuOpen(false)
  }
})
</script>

<template>
  <div
    class="h-[60px] w-full fixed top-0 left-0 z-10 bg-opacity-15 backdrop-blur-lg shadow-sm flex justify-center items-center p-4">
    <div class="xyc max-w-[1200px] w-full">

      <div class="flex items-center flex-1 h-[60px] space-x-1">
        <Logo />
        <a-button @click="setMobileMenuOpen(true)" size="large" v-show="dt === 'mobile'" type="text">
          <template #icon><span class=" icon-[ant-design--menu-outlined]"></span></template>
        </a-button>
        <Menu v-show="dt !== 'mobile'" />
      </div>


      <div>
        <a-dropdown trigger="hover">
          <a-avatar :size="dt === 'mobile' ? 25 : 30" />
          <template #content>
            <a-doption>个人中心</a-doption>
            <a-doption @click="logout">退出登录</a-doption>
          </template>
        </a-dropdown>
      </div>


    </div>
  </div>

  <!-- 移动端下拉菜单抽屉 -->
  <Drawer :close="() => setMobileMenuOpen(false)" :placement="'left'" :visible="mobileMenuOpen" height="100%"
    :footer="false" :header="false">
    <div class="h-[60px] border-b border-gray-200 flex justify-between items-center px-4">
      <Logo />

      <a-button @click="setMobileMenuOpen(false)" size="large" v-show="dt === 'mobile'" type="text">
        <template #icon><span class="icon-[ant-design--close-outlined]"></span></template>
      </a-button>
    </div>
    <!-- 内容 -->
    <Menu mode="vertical" />
  </Drawer>

</template>
