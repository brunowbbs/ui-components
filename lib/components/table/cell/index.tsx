import type { Ref, TableHTMLAttributes } from "react";
import { forwardRef } from "react";
import {
  Key,
  VisuallyHidden,
  mergeProps,
  useFocusRing,
  useTableCell,
  useTableColumnHeader,
  useTableSelectAllCheckbox,
  useTableSelectionCheckbox,
} from "react-aria";

import type { Node } from "@react-types/shared";
import clsx from "clsx";

import { Checkbox } from "../checkbox";
import type { TableCellProps, TableColProps } from "./types";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";

export const TableCell = forwardRef(
  (
    { cell, state }: TableCellProps,
    ref: Ref<TableHTMLAttributes<HTMLTableDataCellElement>>
  ) => {
    const forwardedRef = useForwardedRef(ref);
    const { gridCellProps } = useTableCell({ node: cell }, state, forwardedRef);
    const { isFocusVisible, focusProps } = useFocusRing();

    function handleRenderCellComponent(cellNode: Node<object>) {
      const { rendered } = cellNode;

      return rendered;
    }

    return (
      <td
        ref={forwardedRef}
        {...mergeProps(gridCellProps, focusProps)}
        className={clsx("td-cell", {
          "--outlined": isFocusVisible,
        })}
      >
        {handleRenderCellComponent(cell)}
      </td>
    );
  }
);

export const TableCheckboxCell = forwardRef(
  (
    { cell, state }: TableCellProps,
    ref: Ref<TableHTMLAttributes<HTMLTableDataCellElement>>
  ) => {
    const forwardedRef = useForwardedRef(ref);
    const { gridCellProps } = useTableCell({ node: cell }, state, forwardedRef);
    const { checkboxProps } = useTableSelectionCheckbox(
      { key: cell.parentKey as Key },
      state
    );

    return (
      <td {...gridCellProps} ref={forwardedRef}>
        <Checkbox {...checkboxProps} />
      </td>
    );
  }
);

export const TableSelectAllCell = forwardRef(
  (
    { column, state }: TableColProps,
    ref: Ref<TableHTMLAttributes<HTMLTableHeaderCellElement>>
  ) => {
    const forwardedRef = useForwardedRef(ref);
    const { columnHeaderProps } = useTableColumnHeader(
      { node: column },
      state,
      forwardedRef
    );
    const { checkboxProps } = useTableSelectAllCheckbox(state);
    const isShowCheckbox = state.selectionManager.selectionMode === "single";

    return (
      <th {...columnHeaderProps} ref={forwardedRef}>
        {isShowCheckbox ? (
          <VisuallyHidden>{checkboxProps["aria-label"]}</VisuallyHidden>
        ) : (
          <Checkbox {...checkboxProps} />
        )}
      </th>
    );
  }
);
