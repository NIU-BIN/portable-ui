import type { ExtractPropTypes } from "vue";

export const Props = {
  span: {
    type: Number,
  },
};

export type IconProps = ExtractPropTypes<typeof Props>;
