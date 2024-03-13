import { PropsWithChildren, ReactNode } from "react";
export type Props = {
    left?: number;
    button: ReactNode;
    width?: number;
} & PropsWithChildren;
