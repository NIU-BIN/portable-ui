<template>
  <p-checkbox label="option1" v-model="checkbox1" disabled></p-checkbox>
  <p-checkbox label="option2" v-model="checkbox2" disabled>🎉1212</p-checkbox>
</template>

<script setup>
import { ref } from "vue";

const checkbox1 = ref(false);
const checkbox2 = ref(false);
</script>
