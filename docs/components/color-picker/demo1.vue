<template>
  <div>
    <p-color-picker v-model="color"></p-color-picker>
    <p>当前颜色: {{ color }}</p>
  </div>
</template>

<script setup>
import { ref } from "vue";

const color = ref("rgb(255,0,0)");
</script>
