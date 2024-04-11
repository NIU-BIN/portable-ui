<template>
  <p>
    <p-switch v-model="switchValue" />
  </p>
</template>

<script setup>
import { ref } from "vue";

const switchValue = ref(false);
</script>
