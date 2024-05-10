import { AriaTextFieldProps } from 'react-aria';

export type InputProps = AriaTextFieldProps & {
    mask?: "money" | "phone" | "cpf" | "cnpj" | "cep" | "text";
    isDisabled?: boolean;
    error?: string;
};
