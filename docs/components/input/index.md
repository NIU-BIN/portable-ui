<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
import demo5 from './demo5.vue'
</script>

# Input 输入框

通过鼠标或键盘输入字符

## 基础用法

<preview comp-name="input" demo-name="demo1">
  <demo1/>
</preview>

## 禁用状态

通过 `disabled` 属性指定是否禁用 input 组件

<preview comp-name="input" demo-name="demo2">
  <demo2/>
</preview>

## 一键清空

使用 `clearable` 属性即可得到一个可一键清空的输入框

<preview comp-name="input" demo-name="demo3">
  <demo3/>
</preview>

## 密码框

使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

<preview comp-name="input" demo-name="demo4">
  <demo4/>
</preview>

## 带图标的输入框

使用 `pre-icon` 或者 `suffix-icon` 插槽即可为输入框添加图标

<preview comp-name="input" demo-name="demo5">
  <demo5/>
</preview>
