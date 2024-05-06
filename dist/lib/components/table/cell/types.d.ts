import { PropsWithChildren } from 'react';
import { Node } from '@react-types/shared';
import { TableState } from 'react-stately';

export type TableCellProps = PropsWithChildren<{
    cell: Node<object>;
    state: TableState<object>;
}>;
export type TableColProps = PropsWithChildren<{
    column: Node<object>;
    state: TableState<object>;
}>;
