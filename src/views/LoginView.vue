<template>
  <a-card>
    <a-form size="large" :model="form" style="width:100%;max-width: 380px; min-width: 355px;" @submit="handleSubmit">
      <a-form-item hide-label field="username" required :rules="[{ required: true, message: '请输入用户名' }]">
        <a-input v-model="form.username" placeholder="请输入用户名">
          <template #prefix>
            <span class="icon-[ant-design--user-outlined]"></span>
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
      <a-button long size="large" class="mt-5" type="primary" html-type="submit">登录</a-button>
    </a-form>
  </a-card>
</template>

<script setup lang="ts">
import { reactive } from 'vue';

const form = reactive({
  username: '',
  password: '',
});

const handleSubmit = (data: any) => {
  if (!data.errors) {
    console.log(data);
  }
};
</script>
