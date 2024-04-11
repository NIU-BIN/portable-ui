<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>

# Table 表格

用于展示多条结构类似的数据， 可对数据进行排序、筛选、对比或其他自定义操作。

## 基础表格

基础的表格展示用法。

当 `p-table` 元素中注入 `column` 设表格的列后使用 `data` 对象数组即可填入数据，用 label 属性来定义表格的列名，key 来指定列的 id。 可以使用 width 属性来定义列宽。

<preview comp-name="table" demo-name="demo1">
  <demo1/>
</preview>

## Table 自定义列

自定义列的显示内容，可组合其他组件使用。

可以使用具名插槽来自定义列的内容，插槽的名称为指定列的 `key`，通过 slot 可以获取到 row, $index，用法参考 demo。

<preview comp-name="table" demo-name="demo2">
  <demo2/>
</preview>

## Table 固定表头

纵向内容过多时，可选择固定表头。

只要在 `p-table` 元素中定义了 `height` 属性，即可实现固定表头的表格，而不需要额外的代码。

<preview comp-name="table" demo-name="demo3">
  <demo3/>
</preview>

## Table 带斑马纹表格

使用带斑马纹的表格，可以更容易区分出不同行的数据。

`stripe` 可以创建带斑马纹的表格。 如果 `true`, 表格将会带有斑马纹。

<preview comp-name="table" demo-name="demo4">
  <demo4/>
</preview>
