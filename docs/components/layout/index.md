<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>

# Layout 布局

通过基础的 24 分栏，迅速简便地创建布局。

::: tip
组件使用 Flex 布局

请注意父容器避免使用 inline 相关样式，会导致组件宽度不能撑满。
:::

## 基础布局

使用列创建基础网格布局。

通过 `row` 和 `col` 组件，并通过 `col` 组件的 `span` 属性我们就可以自由地组合布局。

<preview comp-name="layout" demo-name="demo1">
  <demo1/>
</preview>

## 分栏间隔

支持列间距。

行提供 `gutter` 属性来指定列之间的间距，其默认值为 0。

<preview comp-name="layout" demo-name="demo2">
  <demo2/>
</preview>

## 混合布局

通过基础的 1/24 分栏任意扩展组合形成较为复杂的混合布局。

<preview comp-name="layout" demo-name="demo3">
  <demo3/>
</preview>

## 对齐方式

默认使用 `flex` 布局来对分栏进行灵活的对齐。

您可以通过 `justify` 属性来定义子元素的排版方式，其取值为 `start`、`center`、`end`、`space-between`、`space-around` 或 `space-evenly`。

<preview comp-name="layout" demo-name="demo4">
  <demo4/>
</preview>

<style>
.a,
.b {
  height: 36px;
  border-radius: 6px;
}
.a {
  background: #d3dce6;
}
.b {
  background-color: #e5e9f2;
}
</style>
