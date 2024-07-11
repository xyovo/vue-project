import { generateService } from "@umijs/openapi";
//根目录新建 script/config.js
const openApi = [
  {
    requestLibPath: "import request from '@/utils/request'", // 想怎么引入封装请求方法
    schemaPath: "http://127.0.0.1:4523/export/openapi?projectId=4732193", // openAPI规范地址
    projectName: "./src/service", // 生成到哪个目录内
    serversPath: "./", // 生成代码到哪个目录
  },
];

async function run() {
  for (let index = 0; index < openApi.length; index++) {
    await generateService(openApi[index]);
  }
}
run();
