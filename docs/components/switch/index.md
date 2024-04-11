<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>

# Switch 开关

表示两种相互对立的状态间的切换，多用于触发「开/关」。

## 基础用法

绑定 `v-model` 到一个 Boolean 类型的变量。

<preview comp-name="switch" demo-name="demo1">
  <demo1/>
</preview>

## 文字描述

使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。使用 `inline-prompt` 属性来控制文本是否显示在点内。

<preview comp-name="switch" demo-name="demo2">
  <demo2/>
</preview>

## 不同色系

使用 `type` 属性来设置开关的不同颜色。

<preview comp-name="switch" demo-name="demo3">
  <demo3/>
</preview>
