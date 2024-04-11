<template>
  <div>
    <p style="display: flex; gap: 10px 30px; flex-wrap: wrap">
      <p-switch
        v-model="switchValue"
        type="primary"
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="success"
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="info"
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="warning"
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="danger"
        active-text="Open"
        inactive-text="Close"
      />
    </p>
    <p style="display: flex; gap: 6px; flex-wrap: wrap">
      <p-switch
        v-model="switchValue"
        type="primary"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="success"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="info"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="warning"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
      <p-switch
        v-model="switchValue"
        type="danger"
        inline-prompt
        active-text="Open"
        inactive-text="Close"
      />
    </p>
  </div>
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
