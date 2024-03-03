import { CardProps } from "./types";

export function Card(props: CardProps) {
  return (
    <div className={`w-full rounded shadow-md p-4 bg-white`}>
      {props.children}
    </div>
  );
}
