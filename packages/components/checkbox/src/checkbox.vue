<template>
  {{ groupData && groupData.groupModelValue }}
  <label
    class="p-checkbox"
    :class="{ 'is-checked': isCheck, 'is-disabled': disabled }"
  >
    <input
      type="checkbox"
      class="p-checkbox__inner"
      :name="label"
      :value="isCheck"
      :disabled="disabled"
      @change="handleChange"
    />
    <span class="p-checkbox__label">
      <template v-if="!slot.default">
        {{ label }}
      </template>
      <template v-else>
        <slot />
      </template>
    </span>
  </label>
</template>
<script setup lang="ts">
import { computed, inject, useSlots } from "vue";
import { Props } from "./checkbox";

defineOptions({
  name: "p-checkbox",
});

const slot = useSlots();
const props = defineProps(Props);
const emit = defineEmits(["update:modelValue", "change"]);

const groupData = inject("groupData", undefined) as any;

const isCheck = computed(() => {
  return groupData
    ? (groupData.modelValueRef.value as string[]).includes(props.label)
    : props.modelValue;
});

const handleChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).checked;
  emit("update:modelValue", value);
  emit("change", {
    label: props.label,
    value,
  });
  groupData && groupData.groupModelChange(props.label);
};
</script>
