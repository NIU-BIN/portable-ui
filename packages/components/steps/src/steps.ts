import type { ExtractPropTypes } from "vue";

const SETP_ALIGN = ["left", "center"];

export const Props = {
  active: {
    type: Number,
    default: 0,
  },
  align: {
    type: String,
    default: "left",
    validator(value: string) {
      return SETP_ALIGN.includes(value);
    },
  },
};

export type StepsProps = ExtractPropTypes<typeof Props>;
