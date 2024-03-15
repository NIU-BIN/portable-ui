import type { ExtractPropTypes } from "vue";

export const Props = {
  modelValue: {
    type: String || Number,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "请输入",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
};

export type InputProps = ExtractPropTypes<typeof Props>;
