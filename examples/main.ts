import { createApp } from "vue";
import App from "./app.vue";
import PortableUI from "@portable-ui/components";
import "@portable-ui/theme-chalk/index.less";

const app = createApp(App);
app.use(PortableUI);
app.mount("#app");
