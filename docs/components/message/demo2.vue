<template>
  <p-row :gutter="10">
    <p-button type="success" @click="openMessage('success', true)">
      success
    </p-button>
  </p-row>
</template>

<script setup>
import { PMessage } from "@portable-ui/components";

const openMessage = (type) => {
  PMessage({
    type,
    message: "这是一条消息",
    showClose: true,
  });
};
</script>
