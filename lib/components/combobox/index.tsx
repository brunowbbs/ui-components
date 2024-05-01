import type { Ref } from "react";
import { forwardRef, useRef } from "react";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";
import { HiddenSelect } from "@react-aria/select";
import clsx from "clsx";

import { useButton, useComboBox, useFilter } from "react-aria";
import { Item, useComboBoxState } from "react-stately";
import { chevron } from "../../assets";
import { IconRight } from "../iconText";
import { Text } from "../text";

import { ButtonProps, ComboboxBaseProps, ComboboxProps } from "./types";

import { ListBox } from "./listbox";
import { Popover } from "./popover";

import "./styles.css";

function Button(props: ButtonProps) {
  const ref = props.buttonRef;
  const { buttonProps } = useButton(props, ref);

  return (
    <button {...buttonProps} className="btn-combobox" ref={ref}>
      {props.children}
    </button>
  );
}

export const ComboboxBase = forwardRef(
  ({ error, ...props }: ComboboxBaseProps, ref: Ref<HTMLUListElement>) => {
    const { contains } = useFilter({ sensitivity: "base" });
    const state = useComboBoxState({ ...props, defaultFilter: contains });

    const { placeholder, label, errorMessage, isDisabled } = props;

    const forwardedRef = useForwardedRef(ref);

    const buttonRef = useRef(null);
    const listBoxRef = useRef(null);
    const popoverRef = useRef(null);

    const {
      buttonProps,
      inputProps,
      listBoxProps,
      labelProps,
      errorMessageProps,
    } = useComboBox(
      {
        ...props,
        inputRef: forwardedRef,
        buttonRef,
        listBoxRef,
        popoverRef,
      },
      state
    );

    return (
      <div className="combobox">
        <Text as="label" {...labelProps}>
          {label}
        </Text>

        <HiddenSelect
          state={state}
          triggerRef={forwardedRef}
          label={props.label}
          name={props.name}
        />

        <div className="__wrapper" id="combobox">
          <input
            {...inputProps}
            ref={forwardedRef}
            placeholder={placeholder}
            className={clsx({
              "--selected": inputProps.value || inputProps.defaultValue,
              "--disabled": isDisabled,
              "--warning": errorMessage,
            })}
            disabled={isDisabled}
          />

          <Button
            {...buttonProps}
            buttonRef={buttonRef}
            disabled={isDisabled}
            isOpen={state.isOpen}
          >
            <IconRight
              className={clsx("text-[8px] text-gray-400", {
                "rotate-180 transition text-primary": state.isOpen,
              })}
              src={chevron}
              alt="ícone de expansão"
            />
          </Button>

          {state.isOpen ? (
            <Popover
              state={state}
              triggerRef={forwardedRef}
              popoverRef={popoverRef}
              isNonModal
              placement="bottom start"
              containerPadding={0}
              offset={6}
            >
              <ListBox
                {...listBoxProps}
                state={state}
                width={
                  document.getElementById("combobox")?.getBoundingClientRect()
                    .width
                }
              />
            </Popover>
          ) : null}
        </div>

        {error ? (
          <Text {...errorMessageProps} variant="danger">
            {error}
          </Text>
        ) : null}
      </div>
    );
  }
);

export function Combobox({
  items,
  onChange,
  error,
  placeholder,
  value,
  label,
}: ComboboxProps) {
  return (
    <ComboboxBase
      aria-label="combobox"
      selectedKey={value}
      onSelectionChange={onChange}
      error={error}
      placeholder={placeholder}
      label={label}
    >
      {items.map(({ key, label }) => {
        return <Item key={key}>{label}</Item>;
      })}
    </ComboboxBase>
  );
}
