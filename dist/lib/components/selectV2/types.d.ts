import type { AriaSelectOptions } from "@react-aria/select";
import type { CollectionChildren } from "@react-types/shared";
import type { Key, SelectStateOptions } from "react-stately";
import { ThemeSize } from "../../utils";
export type SelectBaseProps = SelectStateOptions<HTMLSelectElement> & AriaSelectOptions<HTMLSelectElement> & {
    error?: string;
    children: CollectionChildren<HTMLSelectElement>[] | CollectionChildren<HTMLSelectElement> | null;
};
export type SelectProps = {
    items: Array<{
        key: string | number;
        label: string;
    }>;
    size?: ThemeSize;
    error?: string;
    placeholder?: string;
    onChange?: (value: Key) => void;
    value?: Key;
    label?: string;
};
