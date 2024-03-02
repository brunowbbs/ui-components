import { CardProps } from "./types";

export function Card(props: CardProps) {
  return (
    <div className={`w-full rounded overflow-hidden shadow-md p-4`}>
      {props.children}
    </div>
  );
}
