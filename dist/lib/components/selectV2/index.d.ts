/// <reference types="react" />
import { SelectProps } from "./types";
import "./styles.css";
export declare const SelectBase: import("react").ForwardRefExoticComponent<import("react-stately").SelectStateOptions<HTMLSelectElement> & import("@react-aria/select").AriaSelectOptions<HTMLSelectElement> & {
    error?: string | undefined;
    children: import("@react-types/shared").CollectionChildren<HTMLSelectElement> | import("@react-types/shared").CollectionChildren<HTMLSelectElement>[] | null;
} & import("react").RefAttributes<HTMLUListElement>>;
export declare function SelectV2({ items, onChange, error, placeholder, value, label, }: SelectProps): import("react/jsx-runtime").JSX.Element;
