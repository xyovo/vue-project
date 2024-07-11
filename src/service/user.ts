// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 用户信息 GET /api/user/currentUser */
export async function getCurrentUser(options?: { [key: string]: any }) {
  return request<{ code: number; data: API.User }>('/api/user/currentUser', {
    method: 'GET',
    ...(options || {}),
  });
}

/** 登录 POST /api/user/login */
export async function postLogin(options?: { [key: string]: any }) {
  return request<{ code: number; data: API.User }>('/api/user/login', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 注册 POST /api/user/register */
export async function postRegister(options?: { [key: string]: any }) {
  return request<{ code: number; data: API.User }>('/api/user/register', {
    method: 'POST',
    ...(options || {}),
  });
}
