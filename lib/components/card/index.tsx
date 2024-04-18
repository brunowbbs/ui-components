import { CardProps } from "./types";

import "./styles.css";

export function Card({ children }: CardProps) {
  return <div className="card">{children}</div>;
}
