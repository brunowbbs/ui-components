import { HtmlHTMLAttributes } from "react";
import "./styles.css";
import { TableProps } from "./types";
export declare const CustomTable: import("react").ForwardRefExoticComponent<
  import("react-aria").AriaTableProps<object> &
    import("react-stately").TableStateProps<object> & {
      className?: string | undefined;
    } & import("react").RefAttributes<HtmlHTMLAttributes<HTMLTableElement>>
>;
export declare function Table({
  columns,
  rows,
  mode,
  disabled,
  onRowAction,
}: TableProps): import("react/jsx-runtime").JSX.Element;
