export type InputProps = {
  value: string;
  label: string;
  onChangeValue: (value: string) => void;
  error?: string;
  placeholder?: string;
  disabled?: boolean;
  className?: string;
};
