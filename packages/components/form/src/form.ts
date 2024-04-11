import { Rules } from "async-validator";

export type FormProps = {
  model: {
    [key: string]: any;
  };
  labelWidth?: string;
  rules?: Rules;
};
