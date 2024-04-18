import { useState } from 'react';
import { BsCheckCircle, BsCircle } from 'react-icons/bs';
import { RadioButtonGroupProps, RadioButtonProps } from './types';
import clsx from 'clsx';

export function RadioButtonGroup({
  options,
  onChangeValue,
  label,
  error,
  value,
  disabled,
}: RadioButtonGroupProps) {
  const [selectedOption, setSelectedOption] = useState<string | number>(value);

  const handleOptionChange = (optionValue: string | number) => {
    if (disabled) return;

    setSelectedOption(optionValue);
    onChangeValue(optionValue);
  };

  return (
    <div>
      <p className="text-sm mb-2">{label}</p>
      {options?.map((option, index) => (
        <RadioButton
          disabled={disabled}
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
  disabled,
}: RadioButtonProps) {
  return (
    <label htmlFor={String(value)} className="flex items-center gap-2 mb-1">
      <button
        onClick={onChangeValue}
        value={value}
        className={clsx('flex items-center gap-2 cursor-pointer', {
          'cursor-default': disabled,
        })}
      >
        {!checked && (
          <BsCircle
            className={clsx('fill-current ', {
              'text-gray-500': !error,
              'text-red-600': error,
              'text-slate-300': disabled,
            })}
            size={16}
          />
        )}
        {checked && (
          <BsCheckCircle
            className={clsx('fill-current cursor-pointer', {
              'text-primary': !disabled,
              'cursor-default': disabled,
              'text-slate-300': disabled,
            })}
            size={16}
          />
        )}
        <p className={clsx('text-sm', { 'text-gray-400': disabled })}>
          {label}
        </p>
      </button>
    </label>
  );
}
