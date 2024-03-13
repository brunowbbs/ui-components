import { mergeProps, useFocusRing, useTableRow } from "react-aria";

import clsx from "clsx";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";
import type { TableRowProps } from "./types";

import { Ref, TableHTMLAttributes, forwardRef } from "react";

import "../styles.css";

export const TableRow = forwardRef(
  (
    { item, state, children }: TableRowProps,
    ref: Ref<TableHTMLAttributes<HTMLTableRowElement>>
  ) => {
    const forwardedRef = useForwardedRef(ref);

    const isSelected = state.selectionManager.isSelected(item.key);
    const isDisabled = state.selectionManager.isDisabled(item.key);

    const { rowProps, isPressed } = useTableRow(
      {
        node: item,
      },
      state,
      forwardedRef
    );
    const { isFocusVisible, focusProps } = useFocusRing();

    return (
      <tr
        ref={forwardedRef}
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
);
