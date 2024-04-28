/// <reference types="react" />
import type { AriaDialogProps } from "react-aria";
interface DialogProps extends AriaDialogProps {
    title?: React.ReactNode;
    children: React.ReactNode;
}
export declare function Dialog({ title, children, ...props }: DialogProps): import("react/jsx-runtime").JSX.Element;
export {};
