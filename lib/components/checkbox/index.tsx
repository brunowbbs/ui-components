import { useState } from "react";
import { BsCheckSquare, BsSquare } from "react-icons/bs";
import { Props } from "./types";

export function Checkbox({ label }: Props) {
  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    setChecked((prevChecked) => !prevChecked);
  };

  return (
    <>
      <label htmlFor="checkbox">
        <input
          type="checkbox"
          onClick={checkHandler}
          id="checkbox"
          className="hidden"
        />
        <div className="flex gap-2 items-end justify-center">
          {!checked && (
            <BsSquare
              className="fill-current cursor-pointer text-gray-300"
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
      </label>
    </>
  );
}
