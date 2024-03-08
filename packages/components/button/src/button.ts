import type { ExtractPropTypes } from "vue";

export const Props = {
  type: {
    type: String,
    default: "default",
  },
  size: {
    type: String,
    default: "",
  },
  plain: {
    type: Boolean,
    default: false,
  },
  round: {
    type: Boolean,
    default: false,
  },
  icon: {
    type: String,
    default: "",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};

export type ButtonProps = ExtractPropTypes<typeof Props>;
