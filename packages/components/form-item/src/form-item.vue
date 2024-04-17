<template>
  <div
    class="p-form-item"
    :class="{ is_error: currentError, is_required: isRequired }"
  >
    <div
      class="p-form-item__label"
      v-if="!!label"
      :style="{
        width: labelWidth || '90px',
      }"
    >
      {{ label }}
    </div>
    <div class="p-form-item__content">
      <slot />
      <div class="p-form-item__error-message" v-if="currentError">
        {{ currentError }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ComputedRef, inject } from "vue";
import type { FormItemProps } from "./form-item";
import { ValidateError } from "async-validator";

defineOptions({
  name: "p-form-item",
});

const props = defineProps<FormItemProps>();

const labelWidth = inject("label-width") as string;
const rules = inject("rules") as { [key: string]: any };
const errorCollection = inject("error-collection") as ComputedRef<
  ValidateError[]
>;

const isRequired = computed(() => {
  const currentRules = props.prop && rules && rules[props.prop];
  if (currentRules) {
    return currentRules.some((v: any) => v.required);
  } else {
    return false;
  }
});
const currentError = computed(() => {
  return (
    errorCollection.value.find((v) => v.field === props.prop)?.message || ""
  );
});
</script>
