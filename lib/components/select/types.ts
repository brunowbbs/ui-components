export type SelectProps = {
  label: string;
  placeholder: string;
  options: { label: string; value: string | number }[];
  disabled?: boolean;
  isMulti?: boolean;
  width?: number;
};
