import type { ExtractPropTypes } from "vue";

export const Props = {
  modelValue: {
    type: Array,
    default: [],
  },
  accordion: {
    type: Boolean,
    default: false,
  },
};

export type CollapseProps = ExtractPropTypes<typeof Props>;
