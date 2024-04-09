import { App } from "vue";
import * as components from "./components";
import type { Plugin } from "vue";

const FUNCTION_COMP = ["PMessage"];
const DIRECTIVE = ["PInfiniteSrcoll"];

const createPopperContainer = () => {
  const popperContainer = document.createElement("div");
  popperContainer.setAttribute("id", "p-popper-container");
  document.body.append(popperContainer);
};

const install = async (app: App) => {
  createPopperContainer();
  Object.entries(components).forEach(([key, value]) => {
    if (!FUNCTION_COMP.includes(key) && !DIRECTIVE.includes(key)) {
      app.component(key, value);
    }
    if (DIRECTIVE.includes(key)) {
      app.use(value as Plugin);
    }
  });
};

export const PMessage = components.PMessage;
export default install;
