import type { ExtractPropTypes } from "vue";

const ROW_JUSTIFY_ENUM = [
  "start",
  "center",
  "end",
  "space-around",
  "space-between",
  "space-evenly",
];

const ROW_ALIGN_ENUM = ["top", "middle", "bottom"];

export const Props = {
  // 栅格间隔
  gutter: {
    type: Number,
  },
  // flex 布局下的水平排列方式 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly'
  justify: {
    type: String,
    validator(value: string) {
      return ROW_JUSTIFY_ENUM.includes(value);
    },
  },
  // flex 布局下的垂直排列方式 'top' | 'middle' | 'bottom'
  align: {
    type: String,
    validator(value: string) {
      return ROW_ALIGN_ENUM.includes(value);
    },
  },
};

export type IconProps = ExtractPropTypes<typeof Props>;
