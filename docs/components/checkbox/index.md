<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>

# Checkbox 多选框

在一组备选项中进行多选。

## 基础用法

单独使用可以表示两种状态之间的切换，写在标签中的内容为 `checkbox` 按钮后的介绍。

<preview comp-name="checkbox" demo-name="demo1">
  <demo1/>
</preview>

## 禁用状态

多选框不可用状态。

设置 `disabled` 属性即可。

<preview comp-name="checkbox" demo-name="demo2">
  <demo2/>
</preview>

# 多选框组

适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项。
<preview comp-name="checkbox" demo-name="demo3">
<demo3/>
</preview>
