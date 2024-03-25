import clsx from "clsx";
import { useState } from "react";
import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import { InputProps } from "./types";

export function Input(props: InputProps) {
  const [isVisibleContent, setIsVisibleContent] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const inputType = props.isPassword
    ? isVisibleContent
      ? "text"
      : "password"
    : props.type ?? "text";

  return (
    <div className={`flex flex-col w-${props.width ?? "full"}`}>
      <p className="text-sm font-medium">{props.label}</p>
      <div
        className={clsx("border rounded py-[0.75px] relative border-gray-400", {
          "border-primary": isFocused,
          "border-red-600": props.error,
        })}
      >
        <div className="flex items-center">
          <input
            disabled={props.disabled}
            onChange={(event) => props.onChangeValue(event.target.value)}
            type={inputType}
            className={clsx(
              "text-sm font-medium px-2 h-7 rounded outline-none border-gray-500 w-full focus:ring-primary focus:border-primary",
              {
                "pr-6": props.isPassword,
                "cursor-pointer":
                  props.type === "date" ||
                  props.type === "datetime-local" ||
                  props.type === "time",
              }
            )}
            placeholder={props.placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            // {...props}
          />
        </div>
        {props.isPassword && (
          <div
            className={clsx(
              `absolute inset-y-0 right-0 flex items-center pr-2`
            )}
          >
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
      {props.error && <p className="text-[10px] text-red-600">{props.error}</p>}
    </div>
  );
}
