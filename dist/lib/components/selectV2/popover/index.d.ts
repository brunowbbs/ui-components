/// <reference types="react" />
import type { AriaPopoverProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";
type PopoverProps = Omit<AriaPopoverProps, "popoverRef"> & {
    children: React.ReactNode;
    state: OverlayTriggerState;
};
import "./styles.css";
export declare function Popover({ children, state, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
