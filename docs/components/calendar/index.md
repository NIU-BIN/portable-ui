<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
</script>

# Calendar 日历

显示日期

## 基础用法

设置 `value` 来指定当前显示的月份。 如果 `value` 未指定，则显示当月。 `value` 支持 v-model 双向绑定。

<preview comp-name="calendar" demo-name="demo1">
  <demo1/>
</preview>

## 添加内容

通过指定天的插槽来进行自定义内容，插槽名称格式为 `YYYY-MM-DD`

<preview comp-name="calendar" demo-name="demo2">
  <demo2/>
</preview>
