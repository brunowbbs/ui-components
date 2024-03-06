import type { RefObject } from "react";
import { useRef } from "react";
import {
  mergeProps,
  useFocusRing,
  useTableColumnHeader,
  useTableHeaderRow,
  useTableRowGroup,
} from "react-aria";

import clsx from "clsx";

import type {
  TableColumnHeaderProps,
  TableHeaderRowProps,
  TableRowGroupProps,
} from "./types";

export function TableRowGroup({
  type: Element,
  children,
  ...props
}: TableRowGroupProps) {
  const { rowGroupProps } = useTableRowGroup();

  return <Element {...mergeProps(rowGroupProps, props)}>{children}</Element>;
}

export function TableHeaderRow({ state, children, item }: TableHeaderRowProps) {
  const ref = useRef<RefObject<Element>>();

  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <tr {...rowProps} ref={ref} className="tr-header">
      {children}
    </tr>
  );
}

export function TableColumnHeader({ state, column }: TableColumnHeaderProps) {
  const ref = useRef();

  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <th
      ref={ref}
      {...mergeProps(columnHeaderProps, focusProps)}
      className={clsx("th-header", {
        "--outline": isFocusVisible,
      })}
    >
      {column.rendered}
    </th>
  );
}
