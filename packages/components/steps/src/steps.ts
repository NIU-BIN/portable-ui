import type { ExtractPropTypes } from "vue";

export const Props = {
  active: {
    type: Number,
    default: 0,
  },
};

export type StepsProps = ExtractPropTypes<typeof Props>;
