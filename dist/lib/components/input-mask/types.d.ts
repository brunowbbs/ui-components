/// <reference types="react" />
export type InputProps = {
    width?: number;
    label: string;
    type?: "money" | "phone" | "cpf" | "cnpj" | "cep";
    onChange: (value: string) => void;
    error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;
