import { SvgProps } from '../svg/types';

export type IconProps = SvgProps & {
    className?: string;
    size?: "1.5x" | "1x" | "2x" | "3x" | "4x";
};
