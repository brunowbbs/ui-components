import type { AriaTableProps } from "react-aria";

import type { TableStateProps } from "@react-stately/table";
import { ReactNode } from "react";

export type CustomTableProps = AriaTableProps<object> &
  TableStateProps<object> & {
    className?: string;
  };

export type TableProps = {
  columns: Array<ItemsTypes>;
  rows: Array<RowTypes>;
  mode?: "multiple" | "none" | "single";
};

export type RowTypes = { key: string; items: Array<ItemsTypes> };

export type ItemsTypes = string | ReactNode;
