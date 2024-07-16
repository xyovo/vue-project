// @ts-ignore
/* eslint-disable */
import request from '@/utils/request';

/** 文章列表 GET /api/post */
export async function getPost(options?: { [key: string]: any }) {
  return request<{ code: number; msg: string; data: string }>('/api/post', {
    method: 'GET',
    ...(options || {}),
  });
}
