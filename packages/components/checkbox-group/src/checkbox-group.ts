import type { ExtractPropTypes } from "vue";

export const Props = {
  modelValue: {
    type: Array,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type CheckboxGroupProps = ExtractPropTypes<typeof Props>;
