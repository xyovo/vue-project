import type { ApiResponse } from "./request";
import { ElMessage } from "element-plus";

export function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * 处理请求失败消息提示
 * @param error Error
 */
export function error_msg(error: Error) {
  const res = <ApiResponse>(<unknown>error);
  if (res?.msg) {
    ElMessage.error(res.msg);
  } else {
    ElMessage.error("请求失败，请稍后再试");
  }
}
