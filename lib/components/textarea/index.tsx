import clsx from "clsx";
import { useState } from "react";
import { InputProps } from "./types";

export function TextArea(props: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div>
      <p className="text-sm font-medium">{props.label}</p>
      <div
        className={clsx("border rounded py-[0.75px] relative border-gray-400", {
          "border-primary": isFocused,
          "border-red-600": props.error,
        })}
      >
        <div className="flex items-center">
          <textarea
            value={props.value}
            disabled={props.disabled}
            onChange={(event) => props.onChangeValue(event.target.value)}
            className={clsx(
              `text-sm font-medium px-2 py-1 rounded outline-none border-gray-500 w-full focus:ring-primary focus:border-primary ${props.className}`
            )}
            placeholder={props.placeholder}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            style={{ resize: "none" }}
          />
        </div>
      </div>
      {props.error && <p className="text-[10px] text-red-600">{props.error}</p>}
    </div>
  );
}
