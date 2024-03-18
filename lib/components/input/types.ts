import { HTMLInputTypeAttribute } from "react";

export type InputProps = {
  value: string;
  width?: number;
  label: string;
  password?: boolean;
  onChangeValue: (value: string | number) => void;
  error?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
};
