import { JSXElementConstructor, ReactElement, ReactNode } from "react";
import { AriaPopoverProps } from "react-aria";
import { OverlayTriggerState } from "react-stately";
import { ButtonProps } from "../buttonV2/types";
export type PopoverProps = AriaPopoverProps & {
    children: ReactNode;
    state: OverlayTriggerState;
};
export type PopoverTriggerProps = Omit<AriaPopoverProps, "popoverRef" | "triggerRef"> & {
    children: ReactElement<any, string | JSXElementConstructor<any>>;
    childButton?: ReactNode | string;
    buttonProps?: ButtonProps;
    state: OverlayTriggerState;
};
