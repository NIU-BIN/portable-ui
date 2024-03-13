import type { ExtractPropTypes } from "vue";

export const Props = {
  name: {
    type: String,
  },
  size: {
    type: Number,
  },
  color: {
    type: String,
  },
};

export type IconProps = ExtractPropTypes<typeof Props>;
