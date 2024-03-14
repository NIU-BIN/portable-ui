import { App } from "vue";
import * as components from "./components";

const FUNCTION_COMP = ["PMessage"];

const install = (app: App) => {
  Object.entries(components).forEach(([key, value]) => {
    if (!FUNCTION_COMP.includes(key)) {
      app.component(key, value);
    }
  });
};

export const PMessage = components.PMessage;
export default install;
