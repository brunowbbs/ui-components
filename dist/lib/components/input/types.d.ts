import { HTMLInputTypeAttribute } from 'react';

export type Props = {
    value: string;
    width?: number;
    label: string;
    isPassword?: boolean;
    onChangeValue: (value: string | number) => void;
    error?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    disabled?: boolean;
    onFocus?: () => void;
    onBlur?: () => void;
};
