import { ToastProps } from "./types";

import { BiCheckCircle, BiErrorCircle } from "react-icons/bi";
import { PiWarningCircle } from "react-icons/pi";
import { toast } from "react-toastify";
import { Text } from "..";

import { ThemeVariant } from "../..";
import "./styles.css";

function Toast(
  { title, message }: ToastProps,
  renderIcon: JSX.Element,
  variant: ThemeVariant,
  color: string
) {
  const CustomToast = () => (
    <div className="wrapper-toast">
      <div>{renderIcon}</div>

      <div>
        <Text as="p" variant={variant} className="font-bold" size="md">
          {title}
        </Text>

        <Text as="p" size="xs" variant="secondary">
          {message}
        </Text>
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
}

export const showToast = {
  error: (message: string) => {
    Toast(
      { title: "Erro", message },
      <BiErrorCircle color="#e74c3c" size={24} />,
      "danger",
      "#FEF2F2"
    );
  },
  success: (message: string) => {
    Toast(
      { title: "Sucesso", message },
      <BiCheckCircle color="#27ae60" size={24} />,
      "success",
      "#F0FDF4"
    );
  },
  warning: (message: string) => {
    Toast(
      { title: "Atenção", message },
      <PiWarningCircle color="#e67e22" size={24} />,
      "warning",
      "#FFF7ED"
    );
  },
};
