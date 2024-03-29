<template>
  <div class="p-collapse">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { Props } from "./collapse";

defineOptions({
  name: "p-collapse",
});
const props = defineProps(Props);

const opened = computed(() => props.modelValue);
const accordion = computed(() => props.accordion);

const emit = defineEmits(["update:modelValue", "change"]);

const change = (newSelected: string[]) => {
  emit("change", newSelected);
  emit("update:modelValue", newSelected);
};

provide("opened", opened);
provide("change", change);
provide("accordion", accordion);
</script>
