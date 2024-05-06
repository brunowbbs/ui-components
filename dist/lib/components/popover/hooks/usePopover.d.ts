import { OverlayTriggerProps } from 'react-stately';

export declare function useStatePopover(props?: OverlayTriggerProps): {
    state: {
        isOpen: boolean;
        setOpen(isOpen: boolean): void;
        open(): void;
        close(): void;
        toggle(): void;
    };
};
