<template>
  <div
    class="h-[60px] w-full fixed top-0 left-0 z-10 bg-opacity-15 backdrop-blur-lg shadow-sm flex justify-center items-center p-4">
    <div class="xyc max-w-[1200px] w-full">

      <div class="flex items-center flex-1 h-[60px] space-x-1">
        <Logo />

        <Menu v-show="dt !== 'mobile'" />
      </div>


      <div class="h-full flex items-center">
        <el-dropdown trigger="hover">
          <div style="outline: none;"><el-avatar :src="user?.avatar" :shape="'circle'"
              :size="dt === 'mobile' ? 25 : 30" /></div>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>个人中心</el-dropdown-item>
              <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
        <el-divider v-show="dt === 'mobile'" direction="vertical" />
        <span v-show="dt === 'mobile'" @click="setMobileMenuOpen(true)"
          class="icon-[ant-design--menu-outlined] text-xl cursor-pointer"></span>
      </div>

    </div>
  </div>

  <!-- 移动端下拉菜单抽屉 -->
  <el-drawer :direction="'ttb'" size="100vh" class="my-drawer" :show-close="false" :model-value="mobileMenuOpen"
    :close="() => setMobileMenuOpen(false)" :placement="'left'" :visible="mobileMenuOpen" height="100%" :footer="false"
    :header="false">
    <div class="w-screen h-[60px] flex justify-between items-center px-4">
      <Logo />
      <span v-show="dt === 'mobile'" @click="setMobileMenuOpen(false)"
        class="icon-[ant-design--close-outlined] text-xl cursor-pointer"></span>
    </div>
    <!-- 内容 -->
    <!-- <Menu mode="vertical" /> -->
  </el-drawer>

</template>

<script setup lang="ts">
import { useBreakPoint } from "@/hooks/useBreakPoint";
import { useUserStore } from "@/stores/user";
import { useRouter } from "vue-router";
import { useConfigStore } from "@/stores/config";
import { storeToRefs } from "pinia";
import Menu from './Menu.vue'
import Logo from "@/components/Logo.vue";
import { watch } from "vue";
import { ElDrawer } from "element-plus";

const { user, setUser } = useUserStore();
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

<style>
.my-drawer .el-drawer__body {
  padding: 0 !important;
}

.my-drawer .el-drawer__header {
  display: none !important;
}
</style>
