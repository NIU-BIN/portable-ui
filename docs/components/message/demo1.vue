<template>
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
</template>

<script setup>
import { PMessage } from "@portable-ui/components";

const openMessage = (type) => {
  PMessage({
    type,
    message: "这是一条消息",
  });
};
</script>
