<template>
  <p>
    <p-switch v-model="switchValue" active-text="Open" inactive-text="Close" />
    <p-switch v-model="switchValue" active-text="是" inactive-text="否" />
  </p>
  <p>
    <p-switch
      v-model="switchValue"
      inline-prompt
      active-text="Open"
      inactive-text="Close"
    />

    <p-switch
      v-model="switchValue"
      inline-prompt
      active-text="active-text"
      inactive-text="inactive-text"
    />
  </p>
</template>

<script setup>
import { ref } from "vue";

const switchValue = ref(false);
</script>

<style scoped>
p {
  display: flex;
  align-items: center;
  gap: 30px;
}
</style>
