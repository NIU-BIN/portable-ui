<template>
  <p-input
    style="width: 240px"
    v-model="inputValue"
    placeholder="请输入"
    disabled
  />
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>
