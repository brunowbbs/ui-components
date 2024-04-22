import { OverlayTriggerProps, useOverlayTriggerState } from "react-stately";

export function useStatePopover(props?: OverlayTriggerProps) {
  const triggerState = useOverlayTriggerState({ ...props });

  return { state: { ...triggerState } };
}
