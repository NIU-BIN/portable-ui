<script setup>
import demo1 from './demo1.vue'
import demo2 from './demo2.vue'
import demo3 from './demo3.vue'

const iconList = ['column-4','add','add-circle','adjust','arrow-up-circle','arrow-right-circle','arrow-down','ashbin','arrow-right','browse','bottom','back','bad','arrow-double-left','arrow-left-circle','arrow-double-right','caps-lock','camera','chart-bar','attachment','code','close','check-item','calendar','comment','column-vertical','column-horizontal','complete','chart-pie','cry','customer-service','delete','direction-down','copy','cut','data-view','direction-down-circle','direction-right','direction-up','discount','direction-left','download','electronics','drag','elipsis','export','explain','edit','eye-close','email','error','favorite','file-common','file-delete','file-add','film','fabulous','file','folder-close','filter','good','hide','home','history','file-open','forward','import','image-text','link','layout','fullscreen-shrink','layers','lock','fullscreen-expand','map','meh','menu','help','modular','notification','mic','play','navigation','pdf','prompt','move','refresh','picture','save','search','scanning','share','security','select','stop','success','smile','setting','survey','text','time','unlock','user','upload','work','warning','zoom-in','zoom-out','add-bold','arrow-left-bold','arrow-up-bold','close-bold','arrow-down-bold','minus-bold','arrow-right-bold','select-bold',];
// '','','','','','','','','','','','','','','','','','','','',
</script>

# Icon 图标

Portable UI 提供了一套常用的图标集合。

## 结合 p-icon 使用

<preview comp-name="icon" demo-name="demo1">
  <demo1/>
</preview>

## 设置大小

可以通过 `size` 属性来设置 icon 的大小

<preview comp-name="icon" demo-name="demo2">
  <demo2/>
</preview>

## 设置颜色

可以通过 `color` 属性来设置 icon 的颜色

<preview comp-name="icon" demo-name="demo3">
  <demo3/>
</preview>

## 图标集合

所有常见图标的集合

<div>
  <div class="icon_grid">
    <div class="icon_item" v-for="item in iconList" :key="item">
      <i :class="`p-icon icon-${item}`"></i>
      <span class="icon_name">{{item}}</span>
    </div>
  </div>
</div>

<style scoped>
.icon_grid {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}
.icon_item {
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

}
.p-icon {
  font-size: 26px;
}
.icon_name {
  font-size: 12px;
}
</style>
