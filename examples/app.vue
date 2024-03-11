<template>
  <div>
    <p-icon color="red" :size="18" />
    <p-row>
      <p-col :span="10">
        <div class="a"></div>
      </p-col>
      <p-col :span="14"> <div class="b"></div></p-col>
    </p-row>
    <p-row :gutter="20">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="14"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <p-row :gutter="20" justify="end">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="10"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <p-row :gutter="20" justify="space-around">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="10"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <p-row :gutter="20" justify="space-between">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="10"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
    <p-row :gutter="20" justify="center">
      <p-col :span="6">
        <div class="a"></div>
      </p-col>
      <p-col :span="10"> <div class="b"></div></p-col>
      <p-col :span="4">
        <div class="a"></div>
      </p-col>
    </p-row>
  </div>
</template>
<script></script>
<style lang="less">
.a,
.b {
  height: 40px;
}
.a {
  background: #d3dce6;
}
.b {
  background-color: #e5e9f2;
}
.space {
  display: flex;
  gap: 20px;
}
</style>
