import { AriaTextFieldProps } from 'react-aria';

export type InputProps = AriaTextFieldProps & {
    className?: string;
};
export type TextAreaProps = Omit<InputProps, "errorMessage"> & {
    error?: string;
};
