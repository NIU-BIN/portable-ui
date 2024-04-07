import DefaultTheme from "vitepress/theme";
import "./style/var.css";
import "./style/style.css";
import PortableUI from "@portable-ui/components";
import "@portable-ui/theme-chalk/index.less";
// edge-light  summerfruit-light  unikitty-light
import "highlight.js/styles/base16/summerfruit-light.css";
import Preview from "./preview/index.vue";
import hljsVuePlugin from "@highlightjs/vue-plugin";

export default {
  ...DefaultTheme,
  // Layout,
  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(PortableUI);
    app.component("preview", Preview);
    app.use(hljsVuePlugin);
  },
};
