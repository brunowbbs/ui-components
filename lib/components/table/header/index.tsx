import type { Ref, TableHTMLAttributes } from 'react';
import { forwardRef } from 'react';
import {
  mergeProps,
  useFocusRing,
  useTableColumnHeader,
  useTableHeaderRow,
  useTableRowGroup,
} from 'react-aria';

import clsx from 'clsx';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';

import type {
  TableColumnHeaderProps,
  TableHeaderRowProps,
  TableRowGroupProps,
} from './types';

export function TableRowGroup({
  type: Element,
  children,
  ...props
}: TableRowGroupProps) {
  const { rowGroupProps } = useTableRowGroup();

  return <Element {...mergeProps(rowGroupProps, props)}>{children}</Element>;
}

export const TableHeaderRow = forwardRef(
  (
    { state, children, item }: TableHeaderRowProps,
    ref: Ref<TableHTMLAttributes<HTMLTableRowElement>>,
  ) => {
    const forwardedRef = useForwardedRef(ref);

    const { rowProps } = useTableHeaderRow({ node: item }, state, forwardedRef);

    return (
      <tr {...rowProps} ref={forwardedRef} className="tr-header">
        {children}
      </tr>
    );
  },
);

export const TableColumnHeader = forwardRef(
  (
    { state, column }: TableColumnHeaderProps,
    ref: Ref<TableHTMLAttributes<HTMLTableHeaderCellElement>>,
  ) => {
    const forwardedRef = useForwardedRef(ref);

    const { columnHeaderProps } = useTableColumnHeader(
      { node: column },
      state,
      forwardedRef,
    );
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
      <th
        ref={forwardedRef}
        {...mergeProps(columnHeaderProps, focusProps)}
        className={clsx('th-header', {
          '--outline': isFocusVisible,
        })}
      >
        {column.rendered}
      </th>
    );
  },
);
