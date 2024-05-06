import type { AriaSelectOptions } from "@react-aria/select";

import type { CollectionChildren } from "@react-types/shared";
import { PropsWithChildren } from "react";
import { AriaButtonProps } from "react-aria";
import type { ComboBoxStateOptions, Key } from "react-stately";

export type ComboboxBaseProps = ComboBoxStateOptions<HTMLSelectElement> &
  AriaSelectOptions<HTMLSelectElement> & {
    error?: string;
    children:
      | CollectionChildren<HTMLSelectElement>[]
      | CollectionChildren<HTMLSelectElement>
      | null;
  };

export type ComboboxProps = {
  items: Array<{ key: string | number; label: string }>;
  error?: string;
  placeholder?: string;
  onChange?: (value: Key | null) => void;
  value?: Key;
  label?: string;
};

export type ButtonProps = AriaButtonProps<"button"> &
  PropsWithChildren<{
    buttonRef: React.MutableRefObject<null>;
    className?: string;
    disabled?: boolean;
    isOpen: boolean;
  }>;
