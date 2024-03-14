<template>
  <div>
    <!-- button -->
    <p-row :gutter="10">
      <p-button>default</p-button>
      <p-button type="primary">primary</p-button>
      <p-button type="success">success</p-button>
      <p-button type="info">info</p-button>
      <p-button type="warning">warning</p-button>
      <p-button type="danger">danger</p-button>
    </p-row>
    <!--  button plain -->
    <p-row :gutter="10">
      <p-button type="primary" plain>primary</p-button>
      <p-button type="success" plain>success</p-button>
      <p-button type="info" plain>info</p-button>
      <p-button type="warning" plain>warning</p-button>
      <p-button type="danger" plain>danger</p-button>
    </p-row>
    <!--  button round -->
    <p-row :gutter="10">
      <p-button round>default</p-button>
      <p-button type="primary" round>primary</p-button>
      <p-button type="success" round>success</p-button>
      <p-button type="info" round>info</p-button>
      <p-button type="warning" round>warning</p-button>
      <p-button type="danger" round>danger</p-button>
    </p-row>
    <!--  button disabled -->
    <p-row :gutter="10">
      <p-button type="primary" disabled>primary</p-button>
      <p-button type="success" disabled>success</p-button>
      <p-button type="info" disabled>info</p-button>
      <p-button type="warning" disabled>warning</p-button>
      <p-button type="danger" disabled>danger</p-button>
    </p-row>
    <!--  button size -->
    <p-row :gutter="10">
      <p-button type="primary">primary</p-button>
      <p-button type="success">success</p-button>
      <p-button type="info">info</p-button>
      <p-button type="warning">warning</p-button>
      <p-button type="danger">danger</p-button>
    </p-row>
    <p-row :gutter="10">
      <p-button type="primary" size="small">primary</p-button>
      <p-button type="success" size="small">success</p-button>
      <p-button type="info" size="small">info</p-button>
      <p-button type="warning" size="small">warning</p-button>
      <p-button type="danger" size="small">danger</p-button>
    </p-row>
    <p-row :gutter="10">
      <p-button type="primary" size="mini">primary</p-button>
      <p-button type="success" size="mini">success</p-button>
      <p-button type="info" size="mini">info</p-button>
      <p-button type="warning" size="mini">warning</p-button>
      <p-button type="danger" size="mini">danger</p-button>
    </p-row>
    <!--  button icon -->
    <p-row :gutter="10">
      <p-button type="primary" icon="chart-bar"></p-button>
      <p-button type="info" icon="data-view"></p-button>
      <p-button type="warning" icon="copy"></p-button>
    </p-row>
    <br />
    <!-- icon -->
    <p-icon :size="20" name="chart-bar" />
    <p-icon :size="20" name="data-view" />
    <p-icon :size="20" name="copy" />
    <!-- layout -->
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
    <!-- message -->
    <p-row :gutter="10">
      <p-button type="success" @click="openMessage('success')">
        success
      </p-button>
      <p-button type="info" @click="openMessage('info')">info</p-button>
      <p-button type="warning" @click="openMessage('warning')">
        warning
      </p-button>
      <p-button type="danger" @click="openMessage('error')">error</p-button>
    </p-row>
    <!-- message showClose  -->
    <p-row :gutter="10">
      <p-button type="success" @click="openMessage('success', true)">
        success
      </p-button>
    </p-row>
  </div>
</template>
<script setup>
import { PMessage } from "@portable-ui/components";
const openMessage = (type, showClose) => {
  PMessage({
    type,
    message: "这是一条消息",
    showClose: showClose,
  });
};
</script>
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
