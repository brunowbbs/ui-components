type Option = {
  label: string;
  value: string | number;
};

export type RadioButtonProps = {
  label: string;
  value: string | number;
  checked: boolean;
  onChangeValue: () => void;
  error?: string;
};

export type RadioButtonGroupProps = {
  value: string | number;
  label: string;
  options: Option[];
  onChangeValue: (value: string | number) => void;
  error?: string;
};
