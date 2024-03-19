export type SelectProps = {
    label: string;
    placeholder: string;
    options: {
        label: string;
        value: string | number | boolean;
    }[];
    disabled?: boolean;
    isMulti?: boolean;
    width?: number;
    onChangeValue: (selectedOption: {
        label: string;
        value: string | number;
    }) => void;
    value: string | number | boolean;
    error?: string;
};
