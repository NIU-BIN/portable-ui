<template>
  <div class="p-row" :style="style">
    <slot />
  </div>
</template>
<script lang="ts">
export default {
  name: "PRow",
};
</script>

<script setup lang="ts">
import { computed } from "vue";
import { Props } from "./row";

const props = defineProps(Props);

const style = computed(() => {
  const { gutter, justify, align } = props;
  return {
    gap: (gutter || 0) + "px",
    justifyContent: justify || "start",
    alignItem: align || "flex-start",
  };
});
</script>

<style lang="less" scoped></style>
