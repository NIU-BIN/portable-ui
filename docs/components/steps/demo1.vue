<template>
  <div>
    <p-steps :active="active">
      <p-step title="第一步" description="打开微信扫一扫" />
      <p-step title="第二步" description="添加好友" />
      <p-step title="第三步" description="选择我的头像" />
      <p-step title="第四步" description="转款1000万" />
    </p-steps>

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
