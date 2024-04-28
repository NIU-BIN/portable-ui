<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'
</script>

# Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

## 基础用法

结合使用 `p-carousel` 和 `p-carousel-item` 标签就得到了一个走马灯。 每一个页面的内容是完全可定制的，把你想要展示的内容放在 `p-carousel-item` 标签内。

<preview comp-name="carousel" demo-name="demo1">
  <demo1/>
</preview>

## 循环方向

使用 `direction` 属性可控制循环的方向，`next` 为正序， `pre` 为反序

<preview comp-name="carousel" demo-name="demo2">
  <demo2/>
</preview>

## 自动播放和切换箭头

使用 `autoplay` 属性可控制走马灯是否自动播放，使用 `arrow` `属性可以控制箭头什么时候显示，arrow` 属性有 `always`, `hover`, `never`属性，分别代表一直显示、hover 显示、一直隐藏

<preview comp-name="carousel" demo-name="demo3">
  <demo3/>
</preview>
