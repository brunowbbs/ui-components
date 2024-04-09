import type { PropsWithChildren } from "react";
import type { ToggleState } from "@react-stately/toggle";
import type { AriaButtonProps } from "@react-types/button";
import { ThemeSize, ThemeVariant } from "../..";
export type ButtonProps = AriaButtonProps<"button"> & PropsWithChildren<{
    isLink?: boolean;
    isVertical?: boolean;
    isTogglable?: boolean;
    isOutlined?: boolean;
    isSummary?: boolean;
    variant?: ThemeVariant;
    title?: string;
    onToggle?: (state: ToggleState) => void;
    size?: ThemeSize;
    className?: string;
    isLoading?: boolean;
}>;
