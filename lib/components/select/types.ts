export type SelectProps = {
  label: string;
  placeholder: string;
  options: {
    label: string;
    value: string | number | boolean | null | undefined;
  }[];
  disabled?: boolean;
  isMulti?: boolean;
  width?: number;
  onChangeValue: (selectedOption: {
    label: string;
    value: string | number | boolean | null | undefined;
  }) => void;
  value: string | number | boolean | null | undefined;
  error?: string;
};
