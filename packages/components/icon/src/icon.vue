<template>
  <i :class="['p-icon', `icon-${name}`]" :style="style"></i>
</template>
<script lang="ts">
export default {
  name: "PIcon",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { Props } from "./icon";

const props = defineProps(Props);

const style = computed(() => {
  const { size, color } = props;
  return {
    ...(size ? { "font-size": size + "px" } : {}),
    ...(color ? { color: color } : {}),
  };
});
</script>

<style lang="less" scoped></style>
