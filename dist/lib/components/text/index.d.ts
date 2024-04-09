/// <reference types="react" />
import type { TextElement } from "./types";
import "./styles.css";
export declare const Text: import("react").ForwardRefExoticComponent<{
    as?: import("./types").TextTags | undefined;
    size?: import("./types").TextSize | undefined;
    className?: string | undefined;
    variant?: import("../..").ThemeVariant | undefined;
} & {
    children?: import("react").ReactNode;
} & import("react").RefAttributes<TextElement>>;
