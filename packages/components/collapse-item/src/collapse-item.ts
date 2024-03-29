import type { ExtractPropTypes } from "vue";

export const Props = {
  title: {
    type: String,
    default: "",
  },
  name: {
    type: String,
    default: "",
  },
};

export type CollapseItemProps = ExtractPropTypes<typeof Props>;
