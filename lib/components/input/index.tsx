import { useRef, useState } from "react";
import { useTextField } from "react-aria";
import { InputProps } from "./types";

import clsx from "clsx";
import { formatCurrency, moneyMask } from "../../utils";
import { Text } from "../text";
import "./styles.css";

export function Input({
  mask,
  label,
  error,
  isDisabled,
  ...props
}: InputProps) {
  const ref = useRef(null);
  const { labelProps, inputProps } = useTextField(props, ref);

  const { onChange, value, ...rest } = inputProps;

  const maskConfigs = {
    phone: {
      pattern: /^(\d{2})(\d{5})(\d{4})$/,
      mask: "($1) $2-$3",
      maxLength: 15,
    },
    cpf: {
      pattern: /^(\d{3})(\d{3})(\d{3})(\d{2})$/,
      mask: "$1.$2.$3-$4",
      maxLength: 14,
    },
    cnpj: {
      pattern: /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      mask: "$1.$2.$3/$4-$5",
      maxLength: 18,
    },
    cep: {
      pattern: /^(\d{2})(\d{3})(\d{3})$/,
      mask: "$1.$2-$3",
      maxLength: 10,
    },
  };

  function formatValue(value: string, { pattern, mask }) {
    if (!value) {
      return "";
    }

    const cleanedValue = value.replace(/\D/g, "");
    const matches = cleanedValue.match(pattern);

    if (!matches) {
      return value;
    }

    return mask.replace(/\$[0-9]/g, (match) => matches[parseInt(match[1])]);
  }

  function applyMask(rawValue: string): string {
    if (!mask || mask === "text") {
      return rawValue;
    }

    const numericValue = rawValue.replace(/\D/g, "");

    if (mask === "money") {
      return moneyMask(numericValue || "0");
    }

    const { pattern, mask: maskPattern } = maskConfigs[mask];
    return formatValue(numericValue, { pattern, mask: maskPattern });
  }

  function applyDefaultMask(rawValue: string): string {
    if (!mask || mask === "text") {
      return rawValue;
    }

    const numericValue = rawValue.replace(/\D/g, "");

    if (mask === "money") {
      return moneyMask(formatCurrency(Number(numericValue)) || "0");
    }

    const { pattern, mask: maskPattern } = maskConfigs[mask];

    return formatValue(numericValue, { pattern, mask: maskPattern });
  }

  const [maskedValue, setMaskedValue] = useState<string>(
    applyDefaultMask(String(value))
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    const newValue = applyMask(value);

    setMaskedValue(newValue);

    event.target.value = newValue;

    onChange ? onChange(event) : null;
  }

  return (
    <div className="wrapper-input">
      <Text {...labelProps} as="label" size="sm" className="font-medium">
        {label}
      </Text>

      <input
        {...rest}
        ref={ref}
        value={maskedValue}
        onChange={handleChange}
        maxLength={maskConfigs[mask as string]?.maxLength}
        className={clsx({
          "--danger": error,
          "--disabled": isDisabled,
        })}
        disabled={isDisabled}
      />

      {error ? (
        <Text size="md" variant="danger">
          {error}
        </Text>
      ) : null}
    </div>
  );
}
