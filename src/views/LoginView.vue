<template>
  <a-card>
    <div class="mt-5 mb-10 xyc space-x-2">
      <img src="/logo.svg" style="height: 30px" alt="logo" />
      <p class="text-lg font-bold">逍遥社区</p>
    </div>
    <a-form size="large" :model="form" style="width: 100%; min-width: 300px" @submit="handleSubmit">
      <a-form-item hide-label field="email" required :rules="[
        { required: true, message: '请输入用户名' },
        { type: 'email', message: '请输入正确的邮箱格式' },
      ]">
        <a-input v-model="form.email" placeholder="请输入用户名">
          <template #prefix>
            <span class="icon-[ant-design--mail-outlined]"></span>
          </template>
        </a-input>
      </a-form-item>
      <a-form-item hide-label field="password" required :rules="[{ required: true, message: '请输入密码' }]">
        <a-input-password v-model="form.password" placeholder="请输入密码">
          <template #prefix>
            <span class="icon-[ant-design--lock-outlined]"></span>
          </template>
        </a-input-password>
      </a-form-item>
      <a-button :loading="loading" long size="large" class="mt-5" type="primary" html-type="submit">登录</a-button>
    </a-form>
  </a-card>
</template>

<script setup lang="ts">
import { postUserLogin } from "@/service/user";
import { error_msg, sleep } from "@/utils";
import { Message } from "@arco-design/web-vue";
import { reactive, watch } from "vue";
import { useRequest } from "vue-request";
import { useRouter } from "vue-router";

const router = useRouter()

const form = reactive({
  email: "",
  password: "",
});

const { runAsync, loading } = useRequest(postUserLogin, {
  manual: true,
  onError: (e) => error_msg(e)
});

async function handleSubmit(form: any) {
  if (!form.errors) {
    try {
      const res = await runAsync(form.values);
      localStorage.setItem("Authorization", res.data)
      Message.success("登录成功");
      router.push("/");
    } catch (err) { }
  }
}

</script>
