import { Message } from "@arco-design/web-vue";
import { extend } from "umi-request";

export interface ApiResponse {
  code: number;
  data: null;
  msg: string;
}

const request = extend({
  timeout: 600000,
});

// 配置请求拦截
request.interceptors.request.use((url, options) => {
  return {
    url,
    options: {
      ...options,
      headers: { Authorization: `${localStorage.getItem("Authorization")}` },
    },
  };
});

// 配置响应拦截
request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  if (!response.ok) {
    handleErrorCode(response.status);
    return Promise.reject(data);
  }
  return Promise.resolve(data);
});

function handleErrorCode(code: number) {
  switch (code) {
    case 401:
      Message.error("请先登录");
      break;
    case 403:
      Message.error("无权限访问");
      break;
    case 404:
      Message.error("资源不存在");
      break;
    case 500:
      Message.error("服务器错误");
      break;
  }
}

export default request;
