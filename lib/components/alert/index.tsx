import clsx from "clsx";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { PiWarningCircle } from "react-icons/pi";

interface AlertProps {
  title?: string;
  message: string;
  type?: "success" | "warning" | "error";
  onAction?: () => void;
  textButton?: string;
}

export const Alert = ({
  message,
  type = "success",
  title,
  onAction,
  textButton,
}: AlertProps) => {
  const removeAlert = () => {
    const alertElement = document.getElementById("alert-root");
    if (alertElement) {
      ReactDOM.unmountComponentAtNode(alertElement);
      alertElement.remove();
    }
  };

  function renderIcon() {
    if (type === "success") {
      return <BiCheckCircle color="#27ae60" size={24} />;
    } else if (type === "error") {
      return <BiErrorCircle color="#e74c3c" size={24} />;
    } else {
      return <PiWarningCircle color="#f1c40f" size={24} />;
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.1 }}
      className={`fixed top-4 right-4 z-50 ${
        type === "success"
          ? "bg-teal-100"
          : type === "warning"
          ? "bg-orange-100"
          : "bg-red-100"
      } rounded-b text-teal-900 px-4 py-3 shadow-md`}
    >
      <div className="flex items-start gap-3">
        {renderIcon()}
        <div className="flex flex-col flex-1 items-start">
          <p
            className={clsx(
              `font-bold text-[0.85rem] ${
                type === "success"
                  ? "text-success-lighter"
                  : type === "warning"
                  ? "text-warning"
                  : "text-danger"
              }`
            )}
          >
            {title}
          </p>
          <p className="text-sm text-gray-600">{message}</p>

          <button
            onClick={() => {
              if (onAction) {
                onAction();
                removeAlert();
              }
            }}
            className={`text-sm px-4 rounded-md py-0.5 mt-2 text-white ${
              type === "success"
                ? "bg-success-lighter"
                : type === "warning"
                ? "bg-warning"
                : "bg-danger"
            }  transition`}
          >
            {textButton}
          </button>
        </div>
        <IoClose
          onClick={removeAlert}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        />
      </div>
    </motion.div>
  );
};
