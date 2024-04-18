import { useState } from 'react';
import { BsCheckSquare, BsSquare } from 'react-icons/bs';
import { Props } from './types';
import clsx from 'clsx';

export function Checkbox({
  label,
  onChangeValue,
  error,
  value,
  disabled,
}: Props) {
  const [checked, setChecked] = useState(Boolean(value));
  const checkHandler = () => {
    if (disabled) return;

    setChecked((prevChecked) => !prevChecked);
    onChangeValue(!checked);
  };

  return (
    <>
      <label
        htmlFor="checkbox"
        className={clsx('cursor-pointer', { 'cursor-default': disabled })}
      >
        <button
          type="button"
          onClick={checkHandler}
          className={clsx({ 'cursor-default': disabled })}
        >
          <div className="flex gap-2 items-end justify-center">
            {!checked && (
              <BsSquare
                className={clsx('fill-current cursor-pointer', {
                  'text-red-600': error,
                  'text-gray-500': !error,
                  'text-slate-300': disabled,
                  'cursor-default': disabled,
                })}
                size={16}
              />
            )}
            {checked && (
              <BsCheckSquare
                className={clsx('fill-current cursor-pointer', {
                  'text-primary': !disabled,
                  'cursor-default': disabled,
                  'text-gray-300': disabled,
                })}
                size={16}
              />
            )}
            <p className={clsx('text-sm', { 'text-gray-400': disabled })}>
              {label}
            </p>
          </div>
        </button>
        {error && <p className="text-[10px] text-red-600 -mt-1">{error}</p>}
      </label>
    </>
  );
}
