import type { ExtractPropTypes, PropType } from "vue";

export type TypeOptionItem = {
  label: string;
  value: string | number;
};

export const Props = {
  modelValue: {
    type: String || Number,
  },
  type: {
    type: String,
    default: "text",
  },
  placeholder: {
    type: String,
    default: "请选择",
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  clearable: {
    type: Boolean,
    default: false,
  },
  option: {
    type: Array as PropType<TypeOptionItem[]>,
    default: [],
  },
};

export type SelectProps = ExtractPropTypes<typeof Props>;
