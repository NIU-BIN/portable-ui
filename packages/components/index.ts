import { App } from "vue";
import * as components from "./components";

const FUNCTION_COMP = ["PMessage"];

const createPopperContainer = () => {
  const popperContainer = document.createElement("div");
  popperContainer.setAttribute("id", "p-popper-container");
  document.body.append(popperContainer);
};

const install = async (app: App) => {
  createPopperContainer();
  Object.entries(components).forEach(([key, value]) => {
    if (!FUNCTION_COMP.includes(key)) {
      app.component(key, value);
    }
  });
};

export const PMessage = components.PMessage;
export default install;
