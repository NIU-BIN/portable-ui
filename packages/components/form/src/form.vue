<template>
  <form class="p-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { getCurrentInstance, provide, ref } from "vue";
import type { FormProps } from "./form";
import Schema, {
  ValidateError,
  ValidateFieldsError,
  Values,
} from "async-validator";

defineOptions({
  name: "p-form",
});

const props = withDefaults(defineProps<FormProps>(), {
  labelWidth: "auto",
});

const errorCollection = ref<ValidateError[]>([]);

provide("rules", props.rules);
provide("label-width", props.labelWidth);
provide("error-collection", errorCollection);

const validate = (
  callback: (valid: boolean, fields: Values | ValidateFieldsError) => void
) => {
  if (props.rules) {
    const validator = new Schema(props.rules);
    validator.validate(props.model, (errors, fields) => {
      errorCollection.value = errors || [];
      callback(!errors, fields);
    });
  } else {
    callback(true, props.model);
  }
};

const resetFields = () => {
  errorCollection.value = [];
};

defineExpose({
  validate,
  resetFields,
});
</script>
