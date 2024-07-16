import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import ArcoVue from "@arco-design/web-vue";
import "./assets/main.css";
import "@arco-design/web-vue/dist/arco.css";
import "element-plus/dist/index.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(ArcoVue);

app.mount("#app");
