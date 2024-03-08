import type { App } from "vue";
import { SFCInstallWithContext } from "./typescript";

export const withInstall = <T>(comp: T, name?: string) => {
  (comp as SFCInstallWithContext<T>).install = (app: App) => {
    app.component((comp as any).name || name, comp as SFCInstallWithContext<T>);
  };
  return comp as SFCInstallWithContext<T>;
};
