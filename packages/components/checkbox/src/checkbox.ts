import type { ExtractPropTypes } from "vue";

export const Props = {
  modelValue: {
    type: Boolean,
  },
  label: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type CheckboxProps = ExtractPropTypes<typeof Props>;
