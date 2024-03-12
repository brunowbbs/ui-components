import { useState } from "react";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { RadioButtonGroupProps, RadioButtonProps } from "./types";
import clsx from "clsx";

export function RadioButtonGroup({
  options,
  onChangeValue,
  label,
  error,
  value,
}: RadioButtonGroupProps) {
  const [selectedOption, setSelectedOption] = useState<string | number>(value);

  const handleOptionChange = (optionValue: string | number) => {
    setSelectedOption(optionValue);
    onChangeValue(optionValue);
  };

  return (
    <div>
      <p className="text-sm mb-2">{label}</p>
      {options.map((option, index) => (
        <RadioButton
          error={error}
          key={index}
          label={option.label}
          value={option.value}
          checked={selectedOption === option.value}
          onChangeValue={() => handleOptionChange(option.value)}
        />
      ))}
      {error && <p className="text-[10px] text-red-600 -mt-1">{error}</p>}
    </div>
  );
}

export function RadioButton({
  label,
  value,
  checked,
  onChangeValue,
  error,
}: RadioButtonProps) {
  return (
    <label htmlFor={String(value)} className="flex items-center gap-2 mb-1">
      <button
        onClick={onChangeValue}
        value={value}
        className="flex items-center gap-2 cursor-pointer"
      >
        {!checked && (
          <BsCircle
            className={clsx("fill-current ", {
              "text-gray-400": !error,
              "text-red-600": error,
            })}
            size={16}
          />
        )}
        {checked && (
          <BsCheckCircle className="fill-current text-primary" size={16} />
        )}
        <p className="text-sm">{label}</p>
      </button>
    </label>
  );
}
