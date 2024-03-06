import type { RefObject } from "react";
import { useRef } from "react";
import {
  VisuallyHidden,
  mergeProps,
  useFocusRing,
  useTableCell,
  useTableColumnHeader,
  useTableSelectAllCheckbox,
  useTableSelectionCheckbox,
} from "react-aria";

import type { FocusableElement, Node } from "@react-types/shared";
import clsx from "clsx";

import { Checkbox } from "../checkbox";
import type { TableCellProps } from "./types";

export function TableCell({ cell, state }: TableCellProps) {
  const ref = useRef<RefObject<FocusableElement>>();

  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  function handleRenderCellComponent(cellNode: Node<object>) {
    const { rendered } = cellNode;

    return rendered;
  }

  return (
    <td
      ref={ref}
      {...mergeProps(gridCellProps, focusProps)}
      className={clsx("td-cell", {
        "--outlined": isFocusVisible,
      })}
    >
      {handleRenderCellComponent(cell)}
    </td>
  );
}

export function TableCheckboxCell({ cell, state }) {
  const ref = useRef<RefObject<FocusableElement>>();

  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { checkboxProps } = useTableSelectionCheckbox(
    { key: cell.parentKey },
    state
  );

  return (
    <td {...gridCellProps} ref={ref}>
      <Checkbox {...checkboxProps} />
    </td>
  );
}

export function TableSelectAllCell({ column, state }) {
  const ref = useRef();

  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );
  const { checkboxProps } = useTableSelectAllCheckbox(state);
  const isShowCheckbox = state.selectionManager.selectionMode === "single";

  return (
    <th {...columnHeaderProps} ref={ref}>
      {isShowCheckbox ? (
        <VisuallyHidden>{checkboxProps["aria-label"]}</VisuallyHidden>
      ) : (
        <Checkbox {...checkboxProps} />
      )}
    </th>
  );
}
