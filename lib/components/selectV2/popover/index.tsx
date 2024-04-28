import { useRef } from "react";
import type { AriaPopoverProps } from "react-aria";
import { DismissButton, Overlay, usePopover } from "react-aria";
import { OverlayTriggerState } from "react-stately";

type PopoverProps = Omit<AriaPopoverProps, "popoverRef"> & {
  children: React.ReactNode;
  state: OverlayTriggerState;
};

import "./styles.css";

export function Popover({ children, state, ...props }: PopoverProps) {
  const popoverRef = useRef(null);
  const { popoverProps, underlayProps } = usePopover(
    {
      ...props,
      popoverRef,
    },
    state
  );

  return (
    <Overlay>
      <div {...underlayProps} style={{ position: "fixed", inset: 0 }} />
      <div
        {...popoverProps}
        ref={popoverRef}
        className="popover-select"
        style={{
          ...popoverProps.style,
        }}
      >
        <DismissButton onDismiss={state.close} />
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
