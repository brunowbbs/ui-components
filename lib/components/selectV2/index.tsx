import type { Ref } from "react";
import { forwardRef } from "react";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";
import { useButton } from "@react-aria/button";
import { HiddenSelect, useSelect } from "@react-aria/select";
import { useSelectState } from "@react-stately/select";
import clsx from "clsx";
import { Popover } from "../popover";
import { ListBox } from "../utils";
import { SelectBaseProps, SelectProps } from "./types";

import { Item } from "react-stately";
import { chevron } from "../../assets";
import { IconRight } from "../iconText";
import { Text } from "../text";
import "./styles.css";

export const SelectBase = forwardRef(
  ({ error, ...props }: SelectBaseProps, ref: Ref<HTMLUListElement>) => {
    const state = useSelectState(props);
    const { placeholder, label, defaultSelectedKey, selectedKey, isDisabled } =
      props;

    const forwardedRef = useForwardedRef(ref);
    const {
      triggerProps,
      valueProps,
      menuProps,
      errorMessageProps,
      labelProps,
    } = useSelect(props, state, forwardedRef);

    const { buttonProps } = useButton(triggerProps, forwardedRef);

    return (
      <div className="select">
        <Text as="label" {...labelProps}>
          {label}
        </Text>

        <HiddenSelect
          state={state}
          triggerRef={forwardedRef}
          label={props.label}
          name={props.name}
        />

        <button
          {...buttonProps}
          id="button-select"
          className={clsx({
            // "--sm": size === "sm",
            // "--md": size === "md",
            // "--lg": size === "lg",
            "--selected": defaultSelectedKey || selectedKey || state.isOpen,
            "--focused": state.isOpen,
            "--warning": error,
            "--disabled": isDisabled,
          })}
        >
          <Text as="span" {...valueProps} className="truncate">
            {state.selectedItem ? state.selectedItem.rendered : placeholder}
          </Text>

          {/* Substituir ícone futuramente */}
          <IconRight
            src={chevron}
            alt="ícone de expansão"
            className={clsx("text-[8px] text-gray-400", {
              "rotate-180 transition text-primary": state.isOpen,
            })}
          />
        </button>

        {state.isOpen ? (
          <Popover state={state} placement="bottom right">
            <ListBox
              {...menuProps}
              state={state}
              width={
                document
                  .getElementById("button-select")
                  ?.getBoundingClientRect().width
              }
            />
          </Popover>
        ) : null}

        {error ? (
          <Text {...errorMessageProps} variant="danger">
            {error}
          </Text>
        ) : null}
      </div>
    );
  }
);

export function SelectV2({
  items,
  onChange,
  error,
  placeholder,
  value,
  label,
}: SelectProps) {
  return (
    <SelectBase
      aria-label="seleção"
      selectedKey={value}
      onSelectionChange={onChange}
      error={error}
      placeholder={placeholder}
      label={label}
    >
      {items.map(({ key, label }) => {
        return <Item key={key}>{label}</Item>;
      })}
    </SelectBase>
  );
}
