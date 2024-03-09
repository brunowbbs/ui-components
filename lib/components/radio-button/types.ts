type Option = {
  label: string;
  value: string | number;
};

export type RadioButtonProps = {
  label: string;
  value: string | number;
  checked: boolean;
  onChange: () => void;
  error?: string;
};

export type RadioButtonGroupProps = {
  value: string | number;
  label: string;
  options: Option[];
  onChange: (value: string | number) => void;
  error?: string;
};
