export type SwitchProps = {
  modelValue: boolean;
  type?: "primary" | "success" | "info" | "warning" | "danger";
  inlinePrompt?: boolean;
  activeText?: string;
  inactiveText?: string;
};
