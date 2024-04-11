<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
</script>

# Collapse 折叠面板

通过折叠面板收纳内容区域

## 基础用法

可同时展开多个面板，面板之间不影响

<preview comp-name="collapse" demo-name="demo1">
  <demo1/>
</preview>

## 手风琴效果

每次只能展开一个面板

通过 `accordion` 属性来设置是否以手风琴模式显示。

<preview comp-name="collapse" demo-name="demo2">
  <demo2/>
</preview>
