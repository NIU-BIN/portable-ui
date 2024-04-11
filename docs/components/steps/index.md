<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
// import demo3 from './demo3.vue'
</script>

# Steps 步骤条

引导用户按照流程完成任务的分步导航条， 可根据实际应用场景设定步骤，步骤不得少于 2 步。

## 基础用法

设置 `active` 属性，接受一个 Number，表明步骤的 index，从 0 开始。

<preview comp-name="steps" demo-name="demo1">
  <demo1/>
</preview>

## 带图标的步骤条

可以在步骤栏中使用各种自定义图标。

通过 icon 属性来设置图标， 图标的类型可以参考 Icon 组件的文档。、

<preview comp-name="steps" demo-name="demo2">
  <demo2/>
</preview>
