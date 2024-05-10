import { AriaComboBoxProps, Key } from "react-aria";

export type SearchProps = AriaComboBoxProps<object> & {
  items: Array<{ key: string | number; label: string }>;
  error?: string;
  placeholder?: string;
  onChange?: (value: Key) => void;
  value?: string;
  label?: string;
};
