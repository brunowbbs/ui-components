type Option = {
  label: string;
  value: string | number;
};

export type RadioButtonProps = {
  label: string;
  value: string | number;
  checked: boolean;
  onChange: () => void;
};

export type RadioButtonGroupProps = {
  options: Option[];
  onChange: (value: string | number) => void;
};
