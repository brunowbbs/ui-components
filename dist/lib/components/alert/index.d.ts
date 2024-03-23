interface AlertProps {
    title: string;
    message: string;
    type?: "success" | "warning" | "error";
    textButton?: string;
    actionButton?: () => void;
}
export declare const Alert: ({ title, message, type, textButton, actionButton, }: AlertProps) => import("react/jsx-runtime").JSX.Element;
export {};
