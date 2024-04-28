import clsx from "clsx";
import { ReactNode } from "react";
import type { AriaPopoverProps } from "react-aria";
import { DismissButton, Overlay, usePopover } from "react-aria";
import type { OverlayTriggerState } from "react-stately";

type PopoverProps = AriaPopoverProps & {
  children: ReactNode;
  state: OverlayTriggerState;
  className?: string;
};

import "./styles.css";

export function Popover({
  children,
  state,
  className,
  ...props
}: PopoverProps) {
  const { popoverProps } = usePopover(props, state);

  return (
    <Overlay>
      <div
        {...popoverProps}
        ref={props.popoverRef as React.RefObject<HTMLDivElement>}
        className={clsx(className, "popover-combobox")}
        style={{
          ...popoverProps.style,
        }}
      >
        {children}
        <DismissButton onDismiss={state.close} />
      </div>
    </Overlay>
  );
}
