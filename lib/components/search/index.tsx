import type { ComboBoxProps } from "@react-types/combobox";
import * as React from "react";
import { useButton, useComboBox, useFilter, useSearchField } from "react-aria";
import { Item, useComboBoxState, useSearchFieldState } from "react-stately";

import { cross, search } from "../../assets";
import { Icon } from "../icon";
import { Text } from "../text";
import { ListBox } from "./listbox";
import { Popover } from "./popover";
import { SearchProps } from "./types";

export { Item } from "react-stately";

function SearchAutocomplete<T extends object>(props: ComboBoxProps<T>) {
  const { label, errorMessage } = props;

  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const inputRef = React.useRef(null);
  const listBoxRef = React.useRef(null);
  const popoverRef = React.useRef(null);

  const { inputProps, listBoxProps, labelProps, errorMessageProps } =
    useComboBox(
      {
        ...props,
        inputRef,
        listBoxRef,
        popoverRef,
      },
      state
    );

  // Get props for the clear button from useSearchField
  const searchProps = {
    label: label,
    value: state.inputValue,
    onChange: (v: string) => state.setInputValue(v),
  };

  const searchState = useSearchFieldState(searchProps);
  const { clearButtonProps } = useSearchField(
    searchProps,
    searchState,
    inputRef
  );
  const clearButtonRef = React.useRef(null);
  const { buttonProps } = useButton(clearButtonProps, clearButtonRef);
  const outerRef = React.useRef(null);

  return (
    <div className="inline-flex flex-col relative mt-4 w-full ">
      <Text as="label" {...labelProps}>
        {label}
      </Text>

      <div
        ref={outerRef}
        id="container-search"
        className={`relative px-2 inline-flex flex-row items-center rounded-md overflow-hidden shadow-sm border-2 bg-white ${
          state.isFocused ? "border-primary" : "border-gray-300"
        }`}
      >
        <Icon
          src={search}
          alt="buscar"
          aria-hidden="true"
          className="text-[10px] text-gray-400"
        />

        <input
          {...inputProps}
          ref={inputRef}
          className="text-sm w-full outline-none px-3 py-1 appearance-none"
        />

        <button
          {...buttonProps}
          ref={clearButtonRef}
          style={{ visibility: state.inputValue !== "" ? "visible" : "hidden" }}
          className="cursor-default text-gray-400 hover:text-gray-600"
        >
          <Icon
            src={cross}
            alt="limpar busca"
            aria-hidden="true"
            className="text-[8px]"
          />
        </button>
      </div>

      {state.isOpen ? (
        <Popover
          popoverRef={popoverRef}
          triggerRef={outerRef}
          state={state}
          isNonModal
          placement="bottom start"
          containerPadding={0}
          offset={6}
        >
          <ListBox
            {...listBoxProps}
            ref={listBoxRef}
            state={state}
            width={
              document
                .getElementById("container-search")
                ?.getBoundingClientRect().width
            }
          />
        </Popover>
      ) : null}

      {errorMessage ? (
        <Text {...errorMessageProps} variant="danger">
          {errorMessage as string}
        </Text>
      ) : null}
    </div>
  );
}

export function Search({
  items,
  error,
  onChange,
  label,
  placeholder,
  value,
}: SearchProps) {
  return (
    <SearchAutocomplete
      label={label}
      inputValue={value}
      onSelectionChange={onChange}
      placeholder={placeholder}
      errorMessage={error}
    >
      {items.map(({ key, label }) => {
        return <Item key={key}>{label}</Item>;
      })}
    </SearchAutocomplete>
  );
}