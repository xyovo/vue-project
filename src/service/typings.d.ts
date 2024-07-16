declare namespace API {
  type User = {
    /** ID 编号 */
    id: number;
    /** 名称 */
    nickname: string;
    username: string;
    email: string;
    /** 介绍 */
    introduce?: string;
    avatar?: string;
    status: number;
    createTime: string;
    updateTime: string;
  };

  type UserCreate = {
    /** 名称 */
    nickname: string;
    password: string;
    email: string;
  };

  type UserUpdate = {
    /** ID 编号 */
    id: string;
    /** 名称 */
    nickname: string;
    username: string;
    email: string;
    /** 介绍 */
    introduce: string;
    status: string;
  };
}
