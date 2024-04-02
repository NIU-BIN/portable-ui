export type SwitchProps = {
  modelValue: boolean;
  inlinePrompt: {
    type: boolean;
    require: false;
  };
  activeText: {
    type: string;
    require: false;
  };
  inactiveText: {
    type: string;
    require: false;
  };
};
