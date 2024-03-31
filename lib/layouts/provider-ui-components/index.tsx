import { ToastContainer } from "react-toastify";

import { DashboardLayoutType } from "./types";

export function ProviderUiComponents({ children }: DashboardLayoutType) {
  return (
    <div className="flex">
      {children}
      <ToastContainer />
    </div>
  );
}
("");
