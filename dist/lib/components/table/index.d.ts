import { HtmlHTMLAttributes } from "react";
import { TableProps } from "./types";
import "./styles.css";
export declare const CustomTable: import("react").ForwardRefExoticComponent<import("react-aria").AriaTableProps<object> & import("react-stately").TableStateProps<object> & {
    className?: string | undefined;
} & import("react").RefAttributes<HtmlHTMLAttributes<HTMLTableElement>>>;
export declare function Table({ columns, rows, mode, disabled }: TableProps): import("react/jsx-runtime").JSX.Element;
