import { useRef } from "react";
import type { AriaMenuProps } from "react-aria";
import { mergeProps, useMenu } from "react-aria";
import { Item, useTreeState } from "react-stately";

import { useMenuItem } from "react-aria";

import { useMenuTrigger } from "react-aria";
import { useMenuTriggerState } from "react-stately";
import { ButtonV2 } from "../buttonV2";
import { Popover } from "../selectV2/popover";

// Reuse the Popover, and Button from your component library. See below for details.
import { useMenuSection, useSeparator } from "react-aria";
import { Text } from "../text";
import { MenuButtonProps, MenuProps } from "./types";

function MenuSection({ section, state }) {
  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  const { separatorProps } = useSeparator({
    elementType: "li",
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <li {...separatorProps} className="" />
      )}
      <li {...itemProps}>
        {section.rendered && (
          <Text {...headingProps} as="span">
            {section.rendered}
          </Text>
        )}
        <ul {...groupProps} className="p-0 list-none">
          {[...section.childNodes].map((node) => (
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
}

function MenuItem({ item, state }) {
  // Get props for the menu item element
  const ref = useRef(null);
  const { menuItemProps } = useMenuItem({ key: item.key }, state, ref);

  return (
    <Text
      {...menuItemProps}
      as="li"
      className="cursor-pointer px-2 py-1 outline-none"
      ref={ref}
    >
      {item.rendered}
    </Text>
  );
}

function MenuBase<T extends object>(props: AriaMenuProps<T>) {
  // Create menu state based on the incoming props
  const state = useTreeState(props);

  // Get props for the menu element
  const ref = useRef(null);
  const { menuProps } = useMenu(props, state, ref);

  return (
    <ul {...menuProps} className="outline-none" ref={ref}>
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <MenuSection key={item.key} section={item} state={state} />
        ) : (
          <MenuItem key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
}

function MenuButton<T extends object>({
  buttonProps,
  childButton,
  ...props
}: MenuButtonProps<T>) {
  // Create state based on the incoming props
  const state = useMenuTriggerState(props);

  // Get props for the button and menu elements
  const ref = useRef(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>({}, state, ref);

  return (
    <>
      <ButtonV2 {...mergeProps(menuTriggerProps, buttonProps)} ref={ref}>
        {childButton}
      </ButtonV2>

      {state.isOpen ? (
        <Popover
          state={state}
          triggerRef={ref}
          placement="bottom start"
          offset={6}
          containerPadding={0}
        >
          <MenuBase {...props} {...menuProps} />
        </Popover>
      ) : null}
    </>
  );
}

export function Menu({ items, onAction, ...props }: MenuProps) {
  return (
    <MenuButton {...props} items={items} onAction={onAction}>
      {({ key, label }) => (
        <Item
          key={key}
          textValue={typeof label === "string" ? label : "Item do menu"}
        >
          {label}
        </Item>
      )}
    </MenuButton>
  );
}
