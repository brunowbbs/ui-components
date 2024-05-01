import type { Ref } from "react";
import { forwardRef } from "react";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";
import { useListBox, useOption } from "@react-aria/listbox";
import clsx from "clsx";

import { Text } from "../../text";

import type { PropsWithChildren } from "react";

import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { ListState } from "@react-stately/list";
import type { Node } from "@react-types/shared";

type ListBoxProps = AriaListBoxOptions<unknown> &
  PropsWithChildren<{
    width?: number;
    state: ListState<unknown>;
  }>;

type OptionProps = {
  item: Node<unknown>;
  state: ListState<unknown>;
};

import "./styles.css";

export const ListBox = forwardRef(
  ({ width, ...props }: ListBoxProps, ref: Ref<HTMLUListElement>) => {
    const forwardedRef = useForwardedRef(ref);
    const { state } = props;
    const { listBoxProps } = useListBox(props, state, forwardedRef);

    return (
      <ul
        {...listBoxProps}
        aria-label={props["aria-label"]}
        ref={forwardedRef}
        className={clsx("listbox")}
        style={{ width }}
      >
        {[...state.collection].map((item) => (
          <Option key={item.key} item={item} state={state} />
        ))}
      </ul>
    );
  }
);

const Option = forwardRef(
  ({ item, state }: OptionProps, ref: Ref<HTMLLIElement>) => {
    const forwardedRef = useForwardedRef(ref);
    const { optionProps, isSelected, isFocused, isDisabled } = useOption(
      {
        key: item.key,
      },
      state,
      forwardedRef
    );

    return (
      <Text
        as="li"
        {...optionProps}
        ref={forwardedRef}
        className={clsx({
          "--selected": isSelected,
          "--focused": isFocused,
          "--disabled": isDisabled,
        })}
      >
        {item.rendered}
      </Text>
    );
  }
);
