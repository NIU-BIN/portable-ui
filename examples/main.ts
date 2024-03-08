import { createApp } from "vue";
import App from "./app.vue";
import PortableUI from "@portable-ui/components";

const app = createApp(App);
app.use(PortableUI);
app.mount("#app");
