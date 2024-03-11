const isProd = process.env.NODE_ENV === "production";
export default {
  base: isProd ? "/portable-ui/" : "",
  title: "一个Vue3 UI框架",
  titleTemplate: ":title - Portable UI",
  description: "一个Vue3 UI框架",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "http://niubin.site/logo.jpg" }]],
  themeConfig: {
    logo: "http://niubin.site/logo.jpg",
    siteTitle: false,
    nav: [
      { text: "指南", link: "/guide/install" },
      { text: "组件", link: "/components/button/" },
    ],
    socialLinks: [
      { icon: "github", link: "https://github.com/NIU-BIN/portable-ui" },
    ],
    sidebar: {
      "/guide/": [
        {
          text: "基础",
          items: [
            { text: "安装", link: "/guide/install" },
            { text: "快速开始", link: "/guide/quickstart" },
          ],
        },
      ],
      "/components/": [
        {
          text: "基本",
          items: [
            { text: "Button 按钮", link: "/components/button/" },
            { text: "Layout 布局", link: "/components/layout/" },
          ],
        },
      ],
    },
    lastUpdatedText: "最近更新时间",
    footer: {
      message: "",
      copyright: "",
    },
  },
};
