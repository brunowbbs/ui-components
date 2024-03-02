import { Colors } from "../../utils/types";

export type ButtonProps = {
  variant: Colors;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
