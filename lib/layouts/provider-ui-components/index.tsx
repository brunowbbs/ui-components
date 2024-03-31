import { ToastContainer } from "react-toastify";
import { DashboardLayoutType } from "./types";

import "react-toastify/dist/ReactToastify.css";

export function ProviderUiComponents({ children }: DashboardLayoutType) {
  return (
    <>
      <ToastContainer />
      {children}
    </>
  );
}
