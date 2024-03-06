import { mergeProps, useFocusRing, useTableRow } from "react-aria";

import clsx from "clsx";

import type { TableRowProps } from "./types";

import { useRef } from "react";
import "../styles.css";

export function TableRow({ item, state, children }: TableRowProps) {
  const ref = useRef();

  const isSelected = state.selectionManager.isSelected(item.key);
  const isDisabled = state.selectionManager.isDisabled(item.key);

  const { rowProps, isPressed } = useTableRow(
    {
      node: item,
    },
    state,
    ref
  );
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <tr
      ref={ref}
      {...mergeProps(rowProps, focusProps)}
      className={clsx("tr-row", {
        "--selected": isSelected,
        "--pressed": isPressed,
        "--outlined": isFocusVisible,
        "--disabled": isDisabled,
      })}
    >
      {children}
    </tr>
  );
}
