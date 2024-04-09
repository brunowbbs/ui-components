/// <reference types="react" />
import "./styles.css";
export declare const ButtonV2: import("react").ForwardRefExoticComponent<import("react-aria").AriaButtonProps<"button"> & {
    isLink?: boolean | undefined;
    isVertical?: boolean | undefined;
    isTogglable?: boolean | undefined;
    isOutlined?: boolean | undefined;
    isSummary?: boolean | undefined;
    variant?: import("../..").ThemeVariant | undefined;
    title?: string | undefined;
    onToggle?: ((state: import("react-stately").ToggleState) => void) | undefined;
    size?: import("../..").ThemeSize | undefined;
    className?: string | undefined;
    isLoading?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
