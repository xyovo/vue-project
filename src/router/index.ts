import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import RootLayout from "@/layouts/root-layout/index.vue";
import UserLayout from "@/layouts/user-layout/index.vue";
import { useConfigStore } from "@/stores/config";
import { useUserStore } from "@/stores/user";
import { getUserInfo } from "@/service/user";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: RootLayout,
      children: [
        {
          path: "/home",
          name: "home",
          component: HomeView,
        },
        {
          path: "/about",
          name: "about",
          component: () => import("../views/AboutView.vue"),
        },
        {
          path: "/follow",
          name: "follow",
          component: () => import("../views/FollowView.vue"),
        },
        { path: "/", redirect: "/home" },
      ],
    },
    {
      path: "/user",
      component: UserLayout,
      children: [
        {
          path: "/user/login",
          name: "login",
          component: () => import("../views/LoginView.vue"),
        },
      ],
    },
    {
      path: "/:catchAll(.*)",
      name: "not-found",
      component: () => import("../views/NotFound.vue"),
    },
  ],
});

async function checkIsLogin(): Promise<boolean> {
  // 校验token
  if (!localStorage.getItem("Authorization")) {
    return false;
  }
  // 校验store中是否有用户信息
  const { user, setUser } = useUserStore();

  // 如果store中没有用户信息，则请求接口获取用户信息
  if (!user) {
    try {
      const { data } = await getUserInfo();
      setUser(data);
    } catch (error) {
      return false;
    }
  }
  return true;
}

router.beforeEach(async (to, from, next) => {
  const { setLoading } = useConfigStore();
  setLoading(true);
  if (to.path === "/user/login") {
    next();
    setLoading(false);
    return;
  }

  // 进行权限验证或登录判断
  if (!(await checkIsLogin())) {
    next("/user/login"); // 重定向到登录页面
  } else {
    next(); // 允许路由跳转
  }
  setLoading(false);
});

export default router;
