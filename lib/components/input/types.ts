export type InputProps = {
  value: string;
  width?: number;
  label: string;
  isPassword?: boolean;
  onChangeValue: (value: string | number) => void;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
