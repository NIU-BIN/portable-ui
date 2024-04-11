<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
</script>

# Message 消息提示

常用于主动操作后的反馈提示。

## 基础用法

从顶部出现，3 秒后自动消失。

<preview comp-name="message" demo-name="demo1">
  <demo1/>
</preview>

## 可关闭的消息提示

可以添加关闭按钮。

默认的 Message 是不可以被人工关闭的。 如果你需要手动关闭功能，你可以把 `showClose` 设置为 `true` 。

<preview comp-name="message" demo-name="demo2">
  <demo2/>
</preview>
