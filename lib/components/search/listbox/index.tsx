import type { Ref } from "react";
import { forwardRef } from "react";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";
import { useListBox, useOption } from "@react-aria/listbox";
import clsx from "clsx";

import { Text } from "../../text";
import type { ListBoxProps, OptionProps } from "./types";

import { Spinner } from "../../spinner";
import "./styles.css";

export const ListBox = forwardRef(
  (
    { width, isLoading, ...props }: ListBoxProps,
    ref: Ref<HTMLUListElement>
  ) => {
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
        {isLoading ? (
          <div className="flex items-center justify-center py-1">
            <Spinner color="black" />
          </div>
        ) : [...state.collection].length ? (
          [...state.collection]?.map((item) => (
            <Option key={item.key} item={item} state={state} />
          ))
        ) : (
          <div className="flex items-center justify-center py-1">
            <Text>Nenhum item foi encontrado!</Text>
          </div>
        )}
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
