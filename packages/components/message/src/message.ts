const MESSAGE_TYPE = ["success", "info", "warning", "error"];

export type MessageConfig = {
  type: "success" | "info" | "warning" | "error";
  message: string;
  showClose?: boolean;
  duration?: number;
  visible: boolean;
};

import type { ExtractPropTypes } from "vue";

export const Props = {
  type: {
    type: String,
    default: "",
    validator(value: string) {
      return MESSAGE_TYPE.includes(value);
    },
  },
  message: {
    type: String,
    default: "",
  },
  showClose: {
    type: Boolean,
    default: false,
  },
  duration: {
    type: Number,
    default: 3000,
  },
};

export type ButtonProps = ExtractPropTypes<typeof Props>;
