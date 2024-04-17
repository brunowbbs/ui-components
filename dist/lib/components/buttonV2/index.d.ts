import { Ref } from "react";
import { ButtonProps } from "./types";
import "./styles.css";
export declare function ButtonV2(props: ButtonProps, ref: Ref<HTMLButtonElement>): import("react/jsx-runtime").JSX.Element;
declare const _default: import("react").ForwardRefExoticComponent<import("react-aria").AriaButtonProps<"button"> & {
    isLink?: boolean | undefined;
    isVertical?: boolean | undefined;
    isOutlined?: boolean | undefined;
    isSummary?: boolean | undefined;
    variant?: import("../..").ThemeVariant | undefined;
    title?: string | undefined;
    size?: import("../..").ThemeSize | undefined;
    className?: string | undefined;
    isLoading?: boolean | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<HTMLButtonElement>>;
export default _default;
