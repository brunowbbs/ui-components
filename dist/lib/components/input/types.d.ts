/// <reference types="react" />
export type InputProps = {
    value: string;
    width?: number;
    label: string;
    password?: boolean;
    onChange: (value: string | number) => void;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
