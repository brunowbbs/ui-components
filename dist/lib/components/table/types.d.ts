/// <reference types="react" />
import type { AriaTableProps, Key } from "react-aria";
import type { TableStateProps } from "@react-stately/table";
export type CustomTableProps = AriaTableProps<object> & TableStateProps<object> & {
    className?: string;
};
export type TableProps = {
    columns: Array<ItemsTypes>;
    rows: Array<RowTypes>;
    mode?: "multiple" | "none" | "single";
    disabled?: Array<string>;
    onRowAction?: (key: Key) => void;
};
export type RowTypes = {
    key: string;
    items: Array<ItemsTypes>;
};
export type ItemsTypes = {
    elem: string | JSX.Element | number;
    key: string;
};
