import type { ReactSVG } from "react";
export type Vector = {
    children?: Vector[];
    tag?: string | keyof ReactSVG;
    props?: Record<string, number | string | undefined>;
};
export type SvgProps = {
    alt: string;
    src: Vector;
    color?: string;
    width?: string;
    height?: string;
    className?: string;
    isCurrentColor?: boolean;
    clipPathId?: string;
};
