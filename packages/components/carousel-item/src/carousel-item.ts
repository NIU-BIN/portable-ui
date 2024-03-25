import type { ExtractPropTypes } from "vue";

const DIRECTION = ["horizontal", "vertical"];

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
    type: Boolean,
    default: false,
  },
  direction: {
    type: String,
    validator(value: string) {
      return DIRECTION.includes(value);
    },
    default: "horizontal",
  },
};

export type CarouselItemProps = ExtractPropTypes<typeof Props>;
