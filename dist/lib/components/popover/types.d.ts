import { PropsWithChildren, ReactNode } from "react";
export type Props = {
  left?: number;
  button: ReactNode;
} & PropsWithChildren;
