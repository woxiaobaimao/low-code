import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "normalize.css";
import "element-plus/theme-chalk/dark/css-vars.css";
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.mount("#app");
