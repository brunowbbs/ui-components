export type SelectProps = {
  label: string;
  placeholder: string;
  options: { label: string; value: string | number }[];
  disabled?: boolean;
  isMulti?: boolean;
  width?: number;
  onChange: (selectedOption: { label: string; value: string | number }) => void;
  value: string | number;
  error?: string;
};
