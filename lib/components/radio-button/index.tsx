import { useState } from "react";
import { BsCheckCircle, BsCircle } from "react-icons/bs";
import { RadioButtonGroupProps, RadioButtonProps } from "./types";

export function RadioButtonGroup({ options, onChange }: RadioButtonGroupProps) {
  const [selectedOption, setSelectedOption] = useState<string | number>("");

  const handleOptionChange = (optionValue: string | number) => {
    setSelectedOption(optionValue);
    onChange(optionValue);
  };

  return (
    <div>
      {options.map((option, index) => (
        <RadioButton
          key={index}
          label={option.label}
          value={option.value}
          checked={selectedOption === option.value}
          onChange={() => handleOptionChange(option.value)}
        />
      ))}
    </div>
  );
}

export function RadioButton({
  label,
  value,
  checked,
  onChange,
}: RadioButtonProps) {
  return (
    <label htmlFor={String(value)} className="flex items-center gap-2 mb-1">
      <input
        type="radio"
        id={String(value)}
        value={value}
        checked={checked}
        onChange={onChange}
        className="hidden"
      />
      {!checked && (
        <BsCircle
          className="fill-current cursor-pointer text-gray-300"
          size={16}
        />
      )}
      {checked && (
        <BsCheckCircle
          className="fill-current text-primary cursor-pointer"
          size={16}
        />
      )}
      <p className="text-sm">{label}</p>
    </label>
  );
}
