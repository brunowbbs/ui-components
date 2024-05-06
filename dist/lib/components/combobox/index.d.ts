import { ComboboxProps } from './types';

export declare const ComboboxBase: import('react').ForwardRefExoticComponent<import('react-stately').ComboBoxStateOptions<HTMLSelectElement> & import('react-aria').AriaSelectOptions<HTMLSelectElement> & {
    error?: string | undefined;
    children: import('@react-types/shared').CollectionChildren<HTMLSelectElement> | import('@react-types/shared').CollectionChildren<HTMLSelectElement>[] | null;
} & import('react').RefAttributes<HTMLUListElement>>;
export declare function Combobox({ items, onChange, error, placeholder, value, label, }: ComboboxProps): import("react/jsx-runtime").JSX.Element;
