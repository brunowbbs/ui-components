import clsx from "clsx";
import { Spinner } from "../spinner";
import { ButtonProps } from "./types";

export function Button(props: ButtonProps) {
  return (
    <button
      disabled={props.disabled || props.isLoading}
      className={clsx(
        "min-w-10 py-1 text-sm px-2 rounded text-white transition flex justify-center items-center",
        {
          "border-2 border-green-700 bg-green-700 hover:bg-green-800 hover:border-green-800":
            !props.outline,
          "border-2 border-green-700 text-green-700 hover:bg-slate-100":
            props.outline,
          "bg-transparent border-none hover:bg-transparent hover:border-0":
            props.link,
        }
      )}
      {...props}
    >
      {props.isLoading ? (
        <Spinner color={props.outline ? "green" : "white"} />
      ) : (
        <p
          className={clsx({
            "text-primary hover:text-primary-darker hover:transition":
              props.link,
          })}
        >
          <div className="flex flex-row items-center gap-1">
            {props.icon}
            {props.text}
          </div>
        </p>
      )}
    </button>
  );
}
