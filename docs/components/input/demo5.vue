<template>
  <p-input style="width: 240px" v-model="inputValue">
    <template #pre-icon>
      <i class="p-icon icon-user"></i>
    </template>
  </p-input>
  <br />
  <p-input style="width: 240px" v-model="inputValue">
    <template #suffix-icon>
      <i class="p-icon icon-setting"></i>
    </template>
  </p-input>
</template>
<script setup>
import { ref } from "vue";

const inputValue = ref("");
</script>
