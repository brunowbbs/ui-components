import * as React from "react";
import {
  HiddenSelect,
  mergeProps,
  useButton,
  useFocusRing,
  useSelect,
} from "react-aria";
import { Item, useSelectState } from "react-stately";

import clsx from "clsx";
import { chevron } from "../../assets";
import { Icon } from "../icon";
import { Text } from "../text";
import { ListBox } from "./listBox";
import { Popover } from "./popover";
import { SelectBaseProps, SelectProps } from "./types";

import "./styles.css";

export { Item } from "react-stately";

export function SelectBase(props: SelectBaseProps) {
  const {
    label,
    isDisabled,
    defaultSelectedKey,
    selectedKey,
    placeholder,
    error,
  } = props;
  // Create state based on the incoming props
  const state = useSelectState(props);

  // Get props for child elements from useSelect
  const ref = React.useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps, errorMessageProps } =
    useSelect(props, state, ref);

  // Get props for the button based on the trigger props from useSelect
  const { buttonProps } = useButton(triggerProps, ref);

  const { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div className="select">
      <Text as="label" {...labelProps}>
        {label}
      </Text>

      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />

      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        id="select"
        className={clsx({
          "--selected": defaultSelectedKey || selectedKey || state.isOpen,
          "--focused": isFocusVisible,
          "--disabled": isDisabled,
        })}
      >
        <Text as="span" {...valueProps}>
          {state.selectedItem ? state.selectedItem.rendered : placeholder}
        </Text>

        <Icon
          src={chevron}
          alt="ícone de expansão"
          className={clsx("text-[8px] text-gray-400", {
            "rotate-180 transition text-primary": state.isOpen,
          })}
        />
      </button>

      {state.isOpen ? (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom start"
          offset={6}
          containerPadding={0}
        >
          <ListBox
            {...menuProps}
            state={state}
            width={
              document.getElementById("select")?.getBoundingClientRect().width
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
