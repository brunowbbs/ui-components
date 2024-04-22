import React, { useRef } from "react";
import {
  DismissButton,
  Overlay,
  mergeProps,
  useOverlayTrigger,
  usePopover,
} from "react-aria";
import { OverlayTriggerProps, useOverlayTriggerState } from "react-stately";
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
  const {
    popoverProps,
    underlayProps,
    // arrowProps,
    //  placement
  } = usePopover(
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
        {/* <svg
          {...arrowProps}
          className="arrow"
          data-placement={placement}
          viewBox="0 0 12 12"
        >
          <path d="M0 0 L6 6 L12 0" />
        </svg> */}
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
  onClose,
  ...props
}: PopoverTriggerProps) {
  const triggerRef = useRef(null);
  const popoverRef = useRef(null);
  const state = useOverlayTriggerState(props as OverlayTriggerProps);
  const { triggerProps, overlayProps } = useOverlayTrigger(
    { type: "dialog" },
    state,
    triggerRef
  );

  if (onClose) {
    onClose();
    state.close();
  }

  return (
    <>
      <ButtonV2 {...mergeProps(triggerProps, buttonProps)} ref={triggerRef}>
        {childButton}
      </ButtonV2>

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
