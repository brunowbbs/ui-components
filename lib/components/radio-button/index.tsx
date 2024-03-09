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
      <button
        onClick={onChange}
        id={String(value)}
        value={value}
        className="flex items-center gap-2 cursor-pointer"
      >
        {!checked && (
          <BsCircle className="fill-current text-gray-400" size={16} />
        )}
        {checked && (
          <BsCheckCircle className="fill-current text-primary" size={16} />
        )}
        <p className="text-sm">{label}</p>
      </button>
    </label>
  );
}
