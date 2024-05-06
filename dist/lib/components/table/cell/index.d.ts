import { TableHTMLAttributes } from 'react';
import { Node } from '@react-types/shared';

export declare const TableCell: import('react').ForwardRefExoticComponent<{
    cell: Node<object>;
    state: import('react-stately').TableState<object>;
} & {
    children?: import('react').ReactNode;
} & import('react').RefAttributes<TableHTMLAttributes<HTMLTableDataCellElement>>>;
export declare const TableCheckboxCell: import('react').ForwardRefExoticComponent<{
    cell: Node<object>;
    state: import('react-stately').TableState<object>;
} & {
    children?: import('react').ReactNode;
} & import('react').RefAttributes<TableHTMLAttributes<HTMLTableDataCellElement>>>;
export declare const TableSelectAllCell: import('react').ForwardRefExoticComponent<{
    column: Node<object>;
    state: import('react-stately').TableState<object>;
} & {
    children?: import('react').ReactNode;
} & import('react').RefAttributes<TableHTMLAttributes<HTMLTableHeaderCellElement>>>;
