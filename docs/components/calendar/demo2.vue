<template>
  <p-calendar>
    <template #2024-04-27>
      <div v-for="item in eventList" :key="item.id" class="event_item">
        <i :class="item.type" />
        <span>{{ item.text }}</span>
      </div>
    </template>
  </p-calendar>
</template>

<script setup>
const eventList = [
  {
    id: 1,
    type: "success",
    text: "洗脸",
  },
  {
    id: 2,
    type: "warning",
    text: "刷牙",
  },
  {
    id: 3,
    type: "success",
    text: "干饭",
  },
];
</script>

<style scoped>
.event_item {
  margin-top: 6px;
  display: flex;
  gap: 6px;
  align-items: center;
  font-size: 14px;
  color: #666;
  i {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
  }
  .success {
    background-color: var(--p-success);
  }
  .warning {
    background-color: var(--p-warning);
  }
}
</style>
