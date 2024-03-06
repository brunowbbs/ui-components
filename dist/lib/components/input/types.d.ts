/// <reference types="react" />
export type InputProps = {
    width?: number;
    label: string;
    isPassword?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;
