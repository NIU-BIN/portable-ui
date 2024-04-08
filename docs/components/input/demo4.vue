<template>
  <p-input
    style="width: 240px"
    v-model="inputValue"
    type="password"
    placeholder="请输入"
  />
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>
