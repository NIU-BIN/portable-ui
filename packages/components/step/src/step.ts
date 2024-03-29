import type { ExtractPropTypes } from "vue";

export const Props = {
  title: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
  },
};

export type StepProps = ExtractPropTypes<typeof Props>;
