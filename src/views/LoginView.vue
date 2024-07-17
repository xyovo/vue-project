<template>
  <el-card shadow="never">
    <div class="mt-5 mb-10 xyc space-x-2">
      <img src="/logo.svg" style="height: 30px" alt="logo" />
      <p class="text-lg font-bold">Test</p>
    </div>
    <el-form ref="formRef" size="large" :model="form" :rules="rules" style="width: 100%; min-width: 300px">
      <el-form-item hide-label prop="email">
        <el-input v-model="form.email" placeholder="请输入用户名">
          <template #prefix>
            <span class="icon-[ant-design--mail-outlined]"></span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item hide-label prop="password">
        <el-input show-password v-model="form.password" placeholder="请输入密码">
          <template #prefix>
            <span class="icon-[ant-design--lock-outlined]"></span>
          </template>
        </el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSubmit(formRef)" :loading="loading" size="large" class="mt-5 w-full"
          type="primary">登录</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script setup lang="ts">
import { postUserLogin } from "@/service/user";
import { error_msg } from "@/utils";
import { ElMessage, type FormInstance, type FormRules } from "element-plus";
import { reactive, ref } from "vue";
import { useRequest } from "vue-request";
import { useRouter } from "vue-router";

interface Form {
  email: string;
  password: string;
}

const router = useRouter()

const formRef = ref<FormInstance>()

const form = ref<Form>({
  email: "",
  password: "",
});

const rules = reactive<FormRules<Form>>({
  email: [{ required: true, message: "请输入邮箱", }, { type: 'email', message: '请输入正确的邮箱格式', trigger: 'blur' }],
  password: [{ required: true, message: "请输入密码" }],
})

const { runAsync, loading } = useRequest(postUserLogin, {
  manual: true,
  onError: (e) => error_msg(e)
});

async function handleSubmit(ref: FormInstance | undefined) {
  if (!ref) return;
  try {
    await ref.validate(async (valid, fields) => {
      if (valid) {
        try {
          const res = await runAsync(form.value);
          localStorage.setItem("Authorization", res.data)
          ElMessage.success("登录成功");
          router.push("/");
        } catch (err) { }
      }
    })
  } catch (err) {
    // npm run dev
    // pnpm run dev
  }

}

</script>
