import clsx from "clsx";
import { motion } from "framer-motion";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

interface AlertProps {
  title: string;
  message: string;
  type?: "success" | "warning" | "error";
  textButton?: string;
  actionButton?: () => void;
}

export const Alert = ({
  title,
  message,
  type = "success",
  textButton = "",
  actionButton = () => {},
}: AlertProps) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ duration: 0.1 }}
          className={clsx(
            "fixed top-14 right-4 z-50 text-black rounded-lg w-80 shadow-sm"
          )}
        >
          <div
            className={`${
              type === "success"
                ? "bg-teal-100"
                : type === "warning"
                ? "bg-orange-100"
                : "bg-red-100"
            } rounded-b text-teal-900 px-4 py-3 shadow-md`}
            role="alert"
          >
            <div className="flex ml-1 items-start">
              <div>
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
                <p className="text-sm">{message}</p>

                <button
                  onClick={() => {
                    actionButton();
                    setIsOpen(false);
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
              <button
                onClick={handleClose}
                className="ml-auto focus:outline-none"
              >
                <IoClose
                  onClick={() => setIsOpen(false)}
                  className="text-teal-700 hover:text-teal-900 cursor-pointer"
                />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};
