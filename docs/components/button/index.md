<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
import demo4 from './demo4.vue'
</script>

# Button 按钮

常用的操作按钮。

## 基础用法

使用 `type`、`plain` 和 `round` 来定义按钮的样式。

<preview comp-name="button" demo-name="demo1">
  <demo1/>
</preview>

## 禁用状态

你可以使用 `disabled` 属性来定义按钮是否被禁用。

使用 `disabled` 属性来控制按钮是否为禁用状态。 该属性接受一个 `Boolean` 类型的值。

<preview comp-name="button" demo-name="demo2">
  <demo2/>
</preview>

## 不同尺寸

除了默认的大小，按钮组件还提供了几种额外的尺寸可供选择，以便适配不同的场景。

使用 `size` 属性额外配置尺寸，可使用 `small` 和 `mini` 两种值。

<preview comp-name="button" demo-name="demo3">
  <demo3/>
</preview>

## 图标按钮

使用 `icon` 属性传入图标的名称，所有的 icon 名称 请查看 `Icon` 组件

<preview comp-name="button" demo-name="demo4">
  <demo4/>
</preview>
