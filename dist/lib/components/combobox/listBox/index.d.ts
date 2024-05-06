import { AriaListBoxOptions } from '@react-aria/listbox';
import { ListState } from '@react-stately/list';

export declare const ListBox: import('react').ForwardRefExoticComponent<AriaListBoxOptions<unknown> & {
    width?: number | undefined;
    state: ListState<unknown>;
} & {
    children?: import('react').ReactNode;
} & import('react').RefAttributes<HTMLUListElement>>;
