import { DetailedHTMLProps, PropsWithChildren, ThHTMLAttributes } from 'react';
import { TableState } from '@react-stately/table';
import { GridNode } from '@react-types/grid';
import { Node } from '@react-types/shared';

type TagTable = "tbody" | "thead";
export type TableElement = HTMLElementTagNameMap[TagTable];
export type TableRowGroupProps = PropsWithChildren<{
    type: TagTable;
}>;
export type TableHeaderRowProps = PropsWithChildren<{
    item: GridNode<object>;
    state: TableState<object>;
}>;
export type TableColumnHeaderProps = DetailedHTMLProps<ThHTMLAttributes<HTMLTableCellElement>, HTMLTableCellElement> & PropsWithChildren<{
    state: TableState<object>;
    column: Node<unknown>;
}>;
export {};
