import { ReactNode } from "react";
import type { AriaPopoverProps } from "react-aria";
import type { OverlayTriggerState } from "react-stately";
type PopoverProps = AriaPopoverProps & {
    children: ReactNode;
    state: OverlayTriggerState;
    className?: string;
};
import "./styles.css";
export declare function Popover({ children, state, className, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
