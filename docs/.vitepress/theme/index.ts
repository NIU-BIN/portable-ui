/*
 * @Description: Stay hungry，Stay foolis
 * @Author: Huccct
 * @Date: 2023-02-08 23:09:59
 * @LastEditors: Huccct
 * @LastEditTime: 2023-02-23 12:33:53
 */
// .vitepress/theme/index.js

import DefaultTheme from "vitepress/theme";
import "./style/var.css";
import "./style/style.css";
import PortableUI from "@portable-ui/components";
import "@portable-ui/theme-chalk/index.less";
export default {
  ...DefaultTheme,
  // Layout,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(PortableUI);
  },
};
