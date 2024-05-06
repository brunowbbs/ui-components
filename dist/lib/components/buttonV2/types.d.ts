import { PropsWithChildren } from 'react';
import { AriaButtonProps } from '@react-types/button';
import { ThemeSize, ThemeVariant } from '../..';

export type ButtonProps = AriaButtonProps<"button"> & PropsWithChildren<{
    isLink?: boolean;
    isVertical?: boolean;
    isOutlined?: boolean;
    isSummary?: boolean;
    variant?: ThemeVariant;
    title?: string;
    size?: ThemeSize;
    className?: string;
    isLoading?: boolean;
}>;
