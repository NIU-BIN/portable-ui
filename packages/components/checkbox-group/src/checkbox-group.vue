<template>
  <div class="p-checkbox-group">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from "vue";
import { Props } from "./checkbox-group";

defineOptions({
  name: "p-checkbox-group",
});

const props = defineProps(Props);
const emit = defineEmits(["update:modelValue", "change"]);
const modelValueRef = computed(() => props.modelValue);

const groupModelChange = (label: string) => {
  const newValue = props.modelValue?.includes(label)
    ? props.modelValue.filter((v) => v !== label)
    : [...(props.modelValue as string[]), label];
  emit("change", newValue);
  emit("update:modelValue", newValue);
};

provide("groupData", {
  modelValueRef,
  groupModelChange,
});
</script>
