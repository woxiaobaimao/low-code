import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import "element-plus/dist/index.css";
const pinia = createPinia();

const app = createApp(App);
app.use(pinia);
app.mount("#app");
