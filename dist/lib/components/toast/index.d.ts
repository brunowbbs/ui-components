interface ToastProps {
    message: string;
    duration?: number;
    type?: "success" | "warning" | "error";
}
export declare const Toast: ({ message, duration, type, }: ToastProps) => import("react/jsx-runtime").JSX.Element;
export {};
