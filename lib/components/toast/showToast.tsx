import { toast } from "react-toastify";
import clsx from "clsx";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { PiWarningCircle } from "react-icons/pi";

interface ToastOptions {
  title: string;
  message: string;
  type?: "success" | "warning" | "error";
}

export const showToast = ({ type, message, title }: ToastOptions) => {
  let color = "";

  if (type === "success") {
    color = "#F0FDF4";
  } else if (type === "error") {
    color = "#FEF2F2";
  } else if (type === "warning") {
    color = "#FFF7ED";
  }

  function renderIcon() {
    if (type === "success") {
      return <BiCheckCircle color="#27ae60" size={24} />;
    } else if (type === "error") {
      return <BiErrorCircle color="#e74c3c" size={24} />;
    } else {
      return <PiWarningCircle color="#e67e22" size={24} />;
    }
  }

  const CustomToast = () => (
    <div className="flex items-center gap-2">
      <div className="">{renderIcon()}</div>
      <div>
        <p
          style={{ fontFamily: "Plus Jakarta Sans" }}
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
        <p className="text-sm" style={{ fontFamily: "Plus Jakarta Sans" }}>
          {message}
        </p>
      </div>
    </div>
  );

  toast(<CustomToast />, {
    autoClose: 3000,
    hideProgressBar: true,
    style: {
      background: color,
    },
    position: "bottom-right",
    closeOnClick: false,
  });
};
