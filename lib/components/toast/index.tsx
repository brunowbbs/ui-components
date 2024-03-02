import { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { IoClose } from "react-icons/io5";
import { MdWarning } from "react-icons/md";
import { PiWarningCircle } from "react-icons/pi";

interface ToastProps {
  message: string;
  duration?: number;
  type?: "success" | "warning" | "error";
}

const Toast = ({ message, duration = 3000, type = "success" }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  const removeToast = () => {
    const toastElement = document.getElementById("toast-root");
    if (toastElement) {
      ReactDOM.unmountComponentAtNode(toastElement);
      toastElement.remove();
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

  function renderTitle() {
    if (type === "success") {
      return "Sucesso";
    } else if (type === "error") {
      return "Erro";
    } else {
      return "Aviso";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: "100%" }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: "100%" }}
      transition={{ duration: 0.1 }}
      className="fixed bottom-4 right-4 z-50 bg-white text-black p-4 rounded-lg w-80 shadow-2xl border"
    >
      <div className="flex items-center gap-3">
        {renderIcon()}
        <div className="flex flex-col flex-1">
          <p className="text-sm font-bold">{renderTitle()}</p>
          <p className="text-sm font-light">{message}</p>
        </div>
        <IoClose
          onClick={removeToast}
          className="text-gray-500 hover:text-gray-700 cursor-pointer"
        />
      </div>
    </motion.div>
  );
};

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
