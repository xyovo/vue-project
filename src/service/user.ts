// @ts-ignore
/* eslint-disable */
import request from "@/utils/request";

/** 查询用户信息 GET /api/user/info */
export async function getUserInfo(options?: { [key: string]: any }) {
  return request<{ code: number; msg: string; data: API.User }>(
    "/api/user/info",
    {
      method: "GET",
      ...(options || {}),
    }
  );
}

/** 更新用户信息 PUT /api/user/info */
export async function putUserInfo(
  body: {
    nickname: string;
    email: string;
  },
  options?: { [key: string]: any }
) {
  return request<{ code: number; msg: string; data: null }>("/api/user/info", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户登录 POST /api/user/login */
export async function postUserLogin(
  body: {
    /** 邮箱 */
    email?: string;
    /** 密码 */
    password?: string;
  },
  options?: { [key: string]: any }
) {
  const formData = new FormData();

  Object.keys(body).forEach((ele) => {
    const item = (body as any)[ele];

    if (item !== undefined && item !== null) {
      if (typeof item === "object" && !(item instanceof File)) {
        if (item instanceof Array) {
          item.forEach((f) => formData.append(ele, f || ""));
        } else {
          formData.append(ele, JSON.stringify(item));
        }
      } else {
        formData.append(ele, item);
      }
    }
  });

  return request<{ code: number; msg: string; data: string }>(
    "/api/user/login",
    {
      method: "POST",
      data: formData,
      requestType: "form",
      ...(options || {}),
    }
  );
}

/** 用户注册 POST /api/user/register */
export async function postUserRegister(
  body: API.UserCreate,
  options?: { [key: string]: any }
) {
  return request<{ code: number; msg: string; data: string }>(
    "/api/user/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: body,
      ...(options || {}),
    }
  );
}
