<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
</script>

# Dialog 对话框

在保留当前页面状态的情况下，告知用户并承载相关操作。

## 基础用法

Dialog 弹出一个对话框，适合需要定制性更大的场景。

需要设置 model-value / v-model 属性，它接收 Boolean，当为 true 时显示 Dialog。 Dialog 分为两个部分：body 和 footer，footer 需要具名为 footer 的 slot。 title 属性用于定义标题，它是可选的，默认值为空。

<preview comp-name="dialog" demo-name="demo1">
  <demo1/>
</preview>

## Dialog 异步

<preview comp-name="dialog" demo-name="demo2">
  <demo2/>
</preview>
