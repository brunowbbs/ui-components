/// <reference types="react" />
import { IconProps } from "../icon/types";
import "./styles.css";
export declare const IconText: import("react").ForwardRefExoticComponent<{
    as?: import("../text/types").TextTags | undefined;
    size?: import("../text/types").TextSize | undefined;
    className?: string | undefined;
    variant?: import("../..").ThemeVariant | undefined;
} & {
    children?: import("react").ReactNode;
} & {
    isVertical?: boolean | undefined;
} & import("react").RefAttributes<import("./types").IconTextElement>>;
export declare const IconFirst: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const IconLast: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
