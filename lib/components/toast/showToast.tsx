import ReactDOM from "react-dom";
import { Toast } from ".";

export const showToast = (
  message: string,
  type?: "success" | "warning" | "error",
  duration?: number
) => {
  const toastRoot = document.createElement("div");
  toastRoot.id = "toast-root";
  document.body.appendChild(toastRoot);
  ReactDOM.render(
    <Toast message={message} duration={duration} type={type} />,
    toastRoot
  );
};
