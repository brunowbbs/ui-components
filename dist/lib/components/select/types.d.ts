export type SelectProps = {
    label: string;
    placeholder: string;
    options: {
        label: string;
        value: string | number;
    }[];
    disabled?: boolean;
    isMulti?: boolean;
    width?: number;
    onChangeValue: (selectedOption: {
        label: string;
        value: string;
    }) => void;
    value: string;
    error?: string;
};
