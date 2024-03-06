import { PropsWithChildren, ReactNode } from "react";
export type Props = {
    left?: number;
    mask_button: ReactNode;
} & PropsWithChildren;
