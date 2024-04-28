<template>
  <div style="width: 100%; height: 260px">
    <p-carousel>
      <p-carousel-item>1</p-carousel-item>
      <p-carousel-item>2</p-carousel-item>
      <p-carousel-item>3</p-carousel-item>
      <p-carousel-item>4</p-carousel-item>
    </p-carousel>
  </div>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>

<style lang="less" scoped>
.p-carousel {
  .p-carousel-item {
    line-height: 260px;
    font-size: 18px;
    text-align: center;
  }
  .p-carousel-item:nth-child(2n) {
    background-color: #99a9bf;
  }
  .p-carousel-item:nth-child(2n + 1) {
    background-color: #ececec;
  }
}
</style>
