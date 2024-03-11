<template>
  <i class="p-icon" :class="`p-col-${span}`">
    <slot />
  </i>
</template>
<script lang="ts">
export default {
  name: "PCol",
};
</script>

<script setup lang="ts">
// import { computed } from "vue";
import { Props } from "./col";

defineProps(Props);
</script>

<style lang="less" scoped></style>
./col
