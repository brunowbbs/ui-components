import { ReactElement } from "react";
import { Colors } from "../../utils/types";
export type ButtonProps = {
    variant?: Colors;
    text?: string;
    outline?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    size?: "sm" | "md" | "lg";
    link?: boolean;
    iconRight?: ReactElement;
    iconLeft?: ReactElement;
    width?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
