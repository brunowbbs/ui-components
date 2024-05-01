/// <reference types="react" />
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "@react-stately/list";
import "./styles.css";
export declare const ListBox: import("react").ForwardRefExoticComponent<AriaListBoxOptions<unknown> & {
    width?: number | undefined;
    state: ListState<unknown>;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLUListElement>>;
