<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>

# Select 选择器

当选项过多时，使用下拉菜单展示并选择内容。

## 基础用法

适用广泛的基础单选 `v-model` 的值为当前被选中的 `option` 的 value 属性值

<preview comp-name="select" demo-name="demo1">
  <demo1/>
</preview>

## 有禁用选项

为 `option` 的某一选项设置 `disabled` 属性，则该选项不可用。

<preview comp-name="select" demo-name="demo2">
  <demo2/>
</preview>

## 搜索选项

通过添加 `search` 属性可开启选项搜索

<preview comp-name="select" demo-name="demo3">
  <demo3/>
</preview>
