import { PropsWithChildren } from "react";
type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    maxWidth?: number;
} & PropsWithChildren;
export declare function Modal({ isOpen, onClose, children, maxWidth, }: ModalProps): import("react/jsx-runtime").JSX.Element;
export {};
