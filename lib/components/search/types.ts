import { ReactNode } from "react";
import { AriaComboBoxProps, Key } from "react-aria";

export type SearchProps = Omit<AriaComboBoxProps<object>, "children"> & {
  items: Array<{
    key: string | number;
    render: string | ReactNode;
    filterValue: string;
  }>;
  error?: string;
  placeholder?: string;
  onChange?: (value: Key) => void;
  value?: string;
  label?: string;
  isLoading?: boolean;
};
