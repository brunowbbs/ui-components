import { ReactNode } from 'react';
import { AriaMenuProps, Key } from 'react-aria';
import { MenuTriggerProps } from 'react-stately';
import { ButtonProps } from '../buttonV2/types';

export type MenuProps = {
    items: Array<{
        key: string | number;
        label: string | ReactNode;
    }>;
    onAction?: (action: Key) => void;
    childButton?: ReactNode | string;
    buttonProps?: ButtonProps;
};
export type MenuButtonProps<T> = AriaMenuProps<T> & MenuTriggerProps & {
    label?: string;
    childButton?: ReactNode | string;
    buttonProps?: ButtonProps;
};
