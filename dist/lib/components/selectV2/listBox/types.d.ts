import { PropsWithChildren } from 'react';
import { AriaListBoxOptions } from '@react-aria/listbox';
import { ListState } from '@react-stately/list';
import { Node } from '@react-types/shared';

export type ListBoxProps = AriaListBoxOptions<unknown> & PropsWithChildren<{
    width?: number;
    state: ListState<unknown>;
}>;
export type OptionProps = {
    item: Node<unknown>;
    state: ListState<unknown>;
};
