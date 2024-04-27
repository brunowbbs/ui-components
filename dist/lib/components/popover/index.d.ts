/// <reference types="react" />
import "./styles.css";
export declare const Popover: import("react").ForwardRefExoticComponent<Omit<import("react-aria").AriaPopoverProps, "popoverRef" | "triggerRef"> & {
    children: import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>>;
    childButton?: import("react").ReactNode;
    buttonProps?: import("../buttonV2/types").ButtonProps | undefined;
    state: import("react-stately").OverlayTriggerState;
} & import("react").RefAttributes<HTMLDivElement>>;
