import clsx from "clsx";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { InputProps } from "./types";

export function Input(props: InputProps) {
  const [isVisibleContent, setIsVisibleContent] = useState(false);

  const inputType = props.isPassword
    ? isVisibleContent
      ? "text"
      : "password"
    : props.type ?? "text";

  return (
    <div className={`flex flex-col w-${props.width ?? "full"}`}>
      <p className="text-sm font-medium">{props.label}</p>
      <div className="border rounded-sm bg-slate-50 relative">
        <input
          {...props}
          type={inputType}
          className={clsx("text-sm px-2 h-7 outline-none w-full ", {
            "pr-6": props.isPassword,
          })}
        />
        {props.isPassword && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-2">
            {!isVisibleContent ? (
              <RiEyeOffLine
                color="#999"
                className="cursor-pointer"
                size={14}
                onClick={() => setIsVisibleContent(!isVisibleContent)}
              />
            ) : (
              <RiEyeLine
                color="#999"
                className="cursor-pointer"
                size={14}
                onClick={() => setIsVisibleContent(!isVisibleContent)}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
