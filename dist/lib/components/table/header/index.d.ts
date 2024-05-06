import { TableHTMLAttributes } from 'react';
import { TableColumnHeaderProps, TableRowGroupProps } from './types';

export declare function TableRowGroup({ type: Element, children, ...props }: TableRowGroupProps): import("react/jsx-runtime").JSX.Element;
export declare const TableHeaderRow: import('react').ForwardRefExoticComponent<{
    item: import('@react-types/grid').GridNode<object>;
    state: import('react-stately').TableState<object>;
} & {
    children?: import('react').ReactNode;
} & import('react').RefAttributes<TableHTMLAttributes<HTMLTableRowElement>>>;
export declare const TableColumnHeader: import('react').ForwardRefExoticComponent<Omit<TableColumnHeaderProps, "ref"> & import('react').RefAttributes<TableHTMLAttributes<HTMLTableHeaderCellElement>>>;
