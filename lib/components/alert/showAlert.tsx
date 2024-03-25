import ReactDOM from "react-dom";
import { Alert } from ".";

interface AlertOptions {
  title: string;
  message: string;
  type?: "success" | "warning" | "error";
  onAction?: () => void;
  textButton?: string;
}

export const showAlert = ({
  title,
  message,
  type = "success",
  onAction,
  textButton,
}: AlertOptions) => {
  const alertRoot = document.createElement("div");
  alertRoot.id = "alert-root";
  document.body.appendChild(alertRoot);
  ReactDOM.render(
    <Alert
      message={message}
      type={type}
      onAction={onAction}
      title={title}
      textButton={textButton}
    />,
    alertRoot
  );
};
