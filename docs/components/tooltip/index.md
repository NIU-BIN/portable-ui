<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>

# Tooltip 文字提示

常用于展示鼠标 hover 时的提示信息。

## 基础用法

使用 `content` 属性来决定 hover 时的提示信息。

<preview comp-name="tooltip" demo-name="demo1">
  <demo1/>
</preview>

## 不同位置

在这里我们提供 9 种不同方向的展示方式，可以通过以下完整示例来理解，选择你要的效果。

`placement` 属性决定展示效果： `placement` 属性值为：[方向]-[对齐位置]；四个方向：top、left、right、bottom；三种对齐位置：start, end，默认为空。 如 placement="left-end"，则提示信息出现在目标元素的左侧，且提示信息的底部与目标元素的底部对齐。

<preview comp-name="tooltip" demo-name="demo2">
  <demo2/>
</preview>

## 指定宽度

可以使用 `width` 属性来决定提示框宽度，一般用于提示内容比较多的情况下

<preview comp-name="tooltip" demo-name="demo3">
  <demo3/>
</preview>
