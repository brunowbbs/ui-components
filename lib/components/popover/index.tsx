import React, { Children, useRef } from "react";
import {
  DismissButton,
  Overlay,
  mergeProps,
  useOverlayTrigger,
  usePopover,
} from "react-aria";
import { ButtonV2 } from "../buttonV2";
import { PopoverProps, PopoverTriggerProps } from "./types";

import "./styles.css";

function PopoverComponent({
  children,
  state,
  offset = 8,
  ...props
}: PopoverProps) {
  const popoverRef = React.useRef(null);
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      offset,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      <div {...underlayProps} className="underlay" />
      <div {...popoverProps} ref={popoverRef} className="popover">
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

export function Popover({
  children,
  childButton = "popover",
  buttonProps,
  state,
  ...props
}: PopoverTriggerProps) {
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    triggerRef
  );

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const childElements = Children.map(childButton, (child: unknown | any) => {
    return child?.props?.children;
  });

  return (
    <>
      <div className="flex">
        <ButtonV2 {...mergeProps(triggerProps, buttonProps)} ref={triggerRef}>
          {childElements}
        </ButtonV2>
      </div>

      {state.isOpen ? (
        <PopoverComponent
          {...props}
          popoverRef={popoverRef}
          triggerRef={triggerRef}
          state={state}
        >
          {mergeProps(children, overlayProps)}
        </PopoverComponent>
      ) : null}
    </>
  );
}
