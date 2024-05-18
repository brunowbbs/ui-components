import type { PropsWithChildren } from "react";

import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "@react-stately/list";
import type { Node } from "@react-types/shared";

export type ListBoxProps = AriaListBoxOptions<unknown> &
  PropsWithChildren<{
    width?: number;
    state: ListState<unknown>;
    isLoading?: boolean;
  }>;

export type OptionProps = {
  item: Node<unknown>;
  state: ListState<unknown>;
};
