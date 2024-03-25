interface AlertOptions {
    title: string;
    message: string;
    type?: "success" | "warning" | "error";
    onAction?: () => void;
    textButton?: string;
}
export declare const showAlert: ({ type, message, title, onAction, textButton, }: AlertOptions) => void;
export {};
