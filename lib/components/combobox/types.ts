import type { ComboBoxProps } from "@react-types/combobox";

export type ComboBoxComponentProps<T> = Omit<ComboBoxProps<T>, "children"> & {
  items: Array<{ key: string; label: string }>;
};
