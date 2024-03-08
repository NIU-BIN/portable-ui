import { App } from "vue";
import * as components from "./components";

const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    app.component(key, value);
  });
};

export default install;
