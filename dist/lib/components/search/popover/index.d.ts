import { ReactNode } from 'react';
import { AriaPopoverProps } from 'react-aria';
import { OverlayTriggerState } from 'react-stately';

type PopoverProps = AriaPopoverProps & {
    children: ReactNode;
    state: OverlayTriggerState;
    className?: string;
};
export declare function Popover({ children, state, className, ...props }: PopoverProps): import("react/jsx-runtime").JSX.Element;
export {};
