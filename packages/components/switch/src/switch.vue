<template>
  <div :class="`p-switch p-switch__${type}`">
    <div
      class="p-switch__label"
      :class="{ active: !modelValue }"
      v-if="!inlinePrompt"
    >
      {{ inactiveText }}
    </div>
    <div
      class="p-switch__core"
      :class="{ 'is-checked': modelValue }"
      @click="handleClick"
    >
      <div class="p-switch__action"></div>
      <div class="p-switch__inner">
        {{ inlinePrompt ? (modelValue ? activeText : inactiveText) : "" }}
      </div>
    </div>
    <div
      class="p-switch__label"
      :class="{ active: modelValue }"
      v-if="!inlinePrompt"
    >
      {{ activeText }}
    </div>
  </div>
</template>

<script setup lang="ts">
import type { SwitchProps } from "./switch";

defineOptions({
  name: "p-switch",
});
const props = withDefaults(defineProps<SwitchProps>(), {
  type: "primary",
});

const emit = defineEmits<{
  "update:modelValue": [value: boolean];
}>();

const handleClick = () => {
  emit("update:modelValue", !props.modelValue);
};
</script>
