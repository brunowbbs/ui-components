import { useState } from "react";
import { BsCheckSquare, BsSquare } from "react-icons/bs";
import { Props } from "./types";
import clsx from "clsx";

export function Checkbox({ label, onChange, error, value }: Props) {
  const [checked, setChecked] = useState(Boolean(value));
  const checkHandler = () => {
    setChecked((prevChecked) => !prevChecked);
    onChange(!checked);
  };

  return (
    <>
      <label htmlFor="checkbox" className="cursor-pointer">
        <button type="button" onClick={checkHandler}>
          <div className="flex gap-2 items-end justify-center">
            {!checked && (
              <BsSquare
                className={clsx("fill-current cursor-pointer", {
                  "text-red-600": error,
                  "text-gray-400": !error,
                })}
                size={16}
              />
            )}
            {checked && (
              <BsCheckSquare
                className="fill-current text-primary cursor-pointer"
                size={16}
              />
            )}
            <p className="text-sm">{label}</p>
          </div>
        </button>
        {error && <p className="text-[10px] text-red-600 -mt-1">{error}</p>}
      </label>
    </>
  );
}
