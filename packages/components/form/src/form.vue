<template>
  <form class="p-form">
    <slot />
  </form>
</template>

<script setup lang="ts">
import { provide, ref } from "vue";
import type { FormProps } from "./form";
import Schema from "async-validator";

defineOptions({
  name: "p-form",
});

const props = withDefaults(defineProps<FormProps>(), {
  labelWidth: "auto",
});

interface ErrorItem {
  field: string;
  fieldValue: any;
  message: string;
}

const errorCollection = ref<ErrorItem[]>([]);

provide("rules", props.rules);
provide("label-width", props.labelWidth);
provide("error-collection", errorCollection);

const descriptor = {
  name: {
    type: "string",
    required: true,
    validator: (rule, value: string) => value === "muji",
  },
  age: {
    type: "number",
    required: true,
    asyncValidator: (rule, value: number) => {
      return new Promise<void>((resolve, reject) => {
        if (value < 18) {
          reject("too young"); // reject with error message
        } else {
          resolve();
        }
      });
    },
  },
};

const validates = (valid, fields) => {
  if (valid) {
    console.log("submit!");
  } else {
    console.log("error submit!", fields);
  }
};

const validate = (callback: (valid, fields) => void) => {
  const validator = new Schema(props.rules);
  validator.validate({ name: "Firstname" }, (errors, fields) => {
    if (errors) {
      errorCollection.value = errors;
      console.log("errors: ", errors);

      // return handleErrors(errors, fields);
    }
    // validation passed
  });
};

defineExpose({
  validate,
});
</script>
