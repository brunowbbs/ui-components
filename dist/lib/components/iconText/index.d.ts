import { IconProps } from '../icon/types';

export declare const IconText: import('react').ForwardRefExoticComponent<{
    as?: import('../text/types').TextTags | undefined;
    size?: import('../text/types').TextSize | undefined;
    className?: string | undefined;
    variant?: import('../..').ThemeVariant | undefined;
    mode?: "unset" | "block" | undefined;
} & {
    children?: import('react').ReactNode;
} & {
    isVertical?: boolean | undefined;
} & import('react').RefAttributes<import('../text/types').TextElement>>;
export declare const IconLeft: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
export declare const IconRight: (props: IconProps) => import("react/jsx-runtime").JSX.Element;
