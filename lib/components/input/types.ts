export type InputProps = {
  width?: number;
  label: string;
  isPassword?: boolean;
  onChangeValue: (value: string | number) => void;
} & React.InputHTMLAttributes<HTMLInputElement>;
