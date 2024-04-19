<template>
  <div>
    <p-steps :active="active">
      <p-step title="起床" icon="notification" />
      <p-step title="炒股" icon="data-view" />
      <p-step title="加仓" icon="good" />
      <p-step title="亏大了" icon="cry" />
    </p-steps>
    <br />
    <p-button type="primary" size="mini" @click="nextStep">下一步</p-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const active = ref(0);

const nextStep = () => {
  active.value++;
  if (active.value > 4) {
    active.value = 0;
  }
};
</script>
