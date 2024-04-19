const isProd = process.env.NODE_ENV === "production";
export default {
  base: isProd ? "/portable-ui/" : "",
  title: "Portable UI",
  // title: "vite",
  // titleTemplate: ":title - Portable UI",
  description: "一个Vue3 UI框架",
  lastUpdated: true,
  head: [["link", { rel: "icon", href: "/logo2.png" }]],
  themeConfig: {
    logo: "/logo2.png",
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
            { text: "Icon 图标", link: "/components/icon/" },
          ],
        },
        {
          text: "Form 表单组件",
          items: [
            { text: "Checkbox 多选框", link: "/components/checkbox/" },
            { text: "Input 输入框", link: "/components/input/" },
            { text: "Select 选择器", link: "/components/select/" },
            { text: "ColorPicker 取色器", link: "/components/color-picker/" },
            { text: "Switch 开关", link: "/components/switch/" },
            { text: "Form 表单", link: "/components/form/" },
          ],
        },
        {
          text: "Data 数据展示",
          items: [
            { text: "Calendar 日历", link: "/components/calendar/" },
            { text: "Carousel 走马灯", link: "/components/carousel/" },
            { text: "Steps 步骤条", link: "/components/steps/" },
            { text: "Collapse 折叠面板", link: "/components/collapse/" },
            { text: "Tree 树形控件", link: "/components/tree/" },
            { text: "Table 表格", link: "/components/table/" },
            {
              text: "Infinite Scroll 无限滚动",
              link: "/components/infinite-scroll/",
            },
          ],
        },
        {
          text: "Navigation 导航",
          items: [{ text: "Steps 步骤条", link: "/components/steps/" }],
        },
        {
          text: "Feedback 反馈组件",
          items: [
            { text: "Dialog 对话框", link: "/components/dialog/" },
            { text: "Message 消息提示", link: "/components/message/" },
            { text: "Tooltip 文字提示", link: "/components/tooltip/" },
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
