<template>
  <p-checkbox-group v-model="checkboxGroup">
    <p-checkbox label="option1" />
    <p-checkbox label="option2">🎉1212</p-checkbox>
  </p-checkbox-group>
  <p style="font-size: 13px">目前选中：{{ checkboxGroup }}</p>
</template>

<script setup>
import { ref } from "vue";

const checkboxGroup = ref(["option1"]);
</script>
