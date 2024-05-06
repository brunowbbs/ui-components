import { AriaPopoverProps } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

type PopoverProps = Omit<AriaPopoverProps, "popoverRef"> & {
    children: React.ReactNode;
    state: OverlayTriggerState;
};
export declare function Popover({ children, state, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
