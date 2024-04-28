import { HTMLInputTypeAttribute } from "react";
import { InputProps } from "react-select";

export type Props = {
  value: string;
  width?: number;
  label: string;
  isPassword?: boolean;
  onChangeValue: (value: string | number) => void;
  error?: string;
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  disabled?: boolean;
} & InputProps;
