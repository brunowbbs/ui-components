import { toast } from "react-toastify";
import clsx from "clsx";
import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { PiWarningCircle } from "react-icons/pi";

interface ToastOptions {
  title: string;
  message: string;
}

const Toast = (
  { title, message }: ToastOptions,
  renderIcon: JSX.Element,
  color: string
) => {
  const CustomToast = () => (
    <div className="flex items-center gap-2">
      <div className="">{renderIcon}</div>
      <div>
        <p
          style={{ fontFamily: "Plus Jakarta Sans" }}
          className={clsx(
            `font-bold text-[0.85rem] ${
              color === "#F0FDF4"
                ? "text-success-lighter"
                : color === "#FFF7ED"
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

export const showToast = {
  error: (message: string) => {
    Toast(
      { title: "Erro", message },
      <BiErrorCircle color="#e74c3c" size={24} />,
      "#FEF2F2"
    );
  },
  success: (message: string) => {
    Toast(
      { title: "Sucesso", message },
      <BiCheckCircle color="#27ae60" size={24} />,
      "#F0FDF4"
    );
  },
  warning: (message: string) => {
    Toast(
      { title: "Atenção", message },
      <PiWarningCircle color="#e67e22" size={24} />,
      "#FFF7ED"
    );
  },
};
