import React from "react";

export type Props = {
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  label: string;
  onChangeValue: (value: boolean) => void;
};
