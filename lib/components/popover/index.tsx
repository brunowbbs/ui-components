import useForwardedRef from "@bedrock-layout/use-forwarded-ref";
import { Children, Ref, forwardRef, useRef } from "react";
import {
  DismissButton,
  Overlay,
  mergeProps,
  useOverlayTrigger,
  usePopover,
} from "react-aria";
import { ButtonV2 } from "../buttonV2";
import { PopoverProps, PopoverTriggerProps } from "./types";

import clsx from "clsx";
import "./styles.css";

function PopoverComponent({
  children,
  state,
  offset = 0,
  popoverRef,
  ...props
}: PopoverProps) {
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
      <div
        {...popoverProps}
        ref={popoverRef as Ref<HTMLDivElement>}
        className={clsx("popover")}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}

export const Popover = forwardRef(
  (
    {
      children,
      childButton,
      buttonProps,
      state,
      ...props
    }: PopoverTriggerProps,
    ref: Ref<HTMLDivElement>
  ) => {
    const triggerRef = useRef(null);
    const forwardedRef = useForwardedRef(ref);
    const { triggerProps, overlayProps } = useOverlayTrigger(
      { type: "dialog" },
      state,
      triggerRef
    );

    const isOnlyChild = Children.count(childButton);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const childElements = Children.map(childButton, (child: unknown | any) => {
      return child?.props?.children;
    });

    return (
      <>
        {childButton ? (
          <div className={clsx("flex")}>
            <ButtonV2
              {...mergeProps(triggerProps, buttonProps)}
              ref={triggerRef}
            >
              {isOnlyChild && childElements[0] == undefined
                ? childButton
                : childElements}
            </ButtonV2>
          </div>
        ) : null}

        {state.isOpen ? (
          <PopoverComponent
            {...props}
            popoverRef={forwardedRef}
            triggerRef={triggerRef}
            state={state}
          >
            {mergeProps(children, overlayProps)}
          </PopoverComponent>
        ) : null}
      </>
    );
  }
);
