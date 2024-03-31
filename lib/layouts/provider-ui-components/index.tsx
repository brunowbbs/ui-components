import { ToastContainer } from "react-toastify";

import { DashboardLayoutType } from "./types";

export function ProviderUiComponents({ children }: DashboardLayoutType) {
  return (
    <>
      {children}
      <ToastContainer />
    </>
  );
}
