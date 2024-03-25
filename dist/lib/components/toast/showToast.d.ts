interface ToastOptions {
    title: string;
    message: string;
    type?: "success" | "warning" | "error";
}
export declare const showToast: ({ type, message, title }: ToastOptions) => void;
export {};
