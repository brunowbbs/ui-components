import { useState } from "react";
import { BsCheckSquare, BsSquare } from "react-icons/bs";
import { Props } from "./types";

export function Checkbox({ label, onChangeValue }: Props) {
  const [checked, setChecked] = useState(false);
  const checkHandler = () => {
    setChecked((prevChecked) => !prevChecked);
    onChangeValue(!checked);
  };

  return (
    <>
      <label htmlFor="checkbox" className="cursor-pointer">
        <button type="button" onClick={checkHandler}>
          <div className="flex gap-2 items-end justify-center">
            {!checked && (
              <BsSquare
                className="fill-current text-gray-400 cursor-pointer"
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
      </label>
    </>
  );
}
