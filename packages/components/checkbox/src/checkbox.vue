<template>
  <label
    class="p-checkbox"
    :class="{ 'is-checked': modelValue, 'is-disabled': disabled }"
  >
    <input
      type="checkbox"
      class="p-checkbox__inner"
      :name="label"
      :value="modelValue"
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
<script lang="ts">
export default {
  name: "p-checkbox",
};
</script>
<script setup lang="ts">
import { useSlots } from "vue";
import { Props } from "./checkbox";

const slot = useSlots();
const props = defineProps(Props);
const emit = defineEmits(["update:modelValue", "change"]);

const handleChange = (e: Event) => {
  const value = (e.target as HTMLInputElement).checked;
  emit("update:modelValue", value);
  emit("change", {
    label: props.label,
    value,
  });
};
</script>
