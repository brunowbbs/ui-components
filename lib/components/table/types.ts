import type { AriaTableProps } from "react-aria";

import type { TableStateProps } from "@react-stately/table";
import { ReactNode } from "react";

export type CustomTableProps = AriaTableProps<object> &
  TableStateProps<object> & {
    className?: string;
  };

export type TableProps = {
  columns: Array<string | ReactNode>;
  rows: Array<{ key: string; items: Array<string | ReactNode> }>;
  mode?: "multiple" | "none" | "single";
};
