# 快速开始

本节将介绍如何在项目中使用 Portable UI.

## 用法

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```js
import { createApp } from "vue";
import App from "./App.vue";
import PortableUI from "portable-ui";
import "portable-ui/theme-chalk/index.less";

const app = createApp(App);
app.use(PortableUI).mount("#app");
```

# 开始使用

现在你可以启动项目了。 对于每个组件的用法，请参考单个组件对应的文档。
