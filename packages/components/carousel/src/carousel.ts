import type { ExtractPropTypes } from "vue";

const DIRECTION = ["pre", "next"];
const ARROW = ["always", "hover", "never"];

export const Props = {
  height: {
    type: String,
    default: "300px",
  },
  // 是否自动切换
  autoplay: {
    type: Boolean,
    default: true,
  },
  // 自动切换的时间间隔，单位为毫秒
  interval: {
    type: Number,
    default: 3000,
  },
  direction: {
    type: String,
    validator(value: string) {
      return DIRECTION.includes(value);
    },
    default: "next",
  },
  arrow: {
    type: String,
    validator(value: string) {
      return ARROW.includes(value);
    },
    default: "hover",
  },
};

export type CarouselProps = ExtractPropTypes<typeof Props>;
