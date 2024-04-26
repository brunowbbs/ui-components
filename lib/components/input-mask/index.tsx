import { useRef } from "react";
import { useTextField } from "react-aria";
import { InputMaskProps } from "./types";

import clsx from "clsx";
import { Text } from "../text";
import "./styles.css";

export function InputWithMask({
  mask,
  label,
  error,
  ...props
}: InputMaskProps) {
  const ref = useRef(null);
  const { labelProps, inputProps } = useTextField(props, ref);

  const { onChange, ...rest } = inputProps;

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

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    if (!mask || mask === "text") {
      return;
    }

    const numericValue = value.replace(/\D/g, "");

    const { pattern, mask: maskPattern } = maskConfigs[mask];

    event.target.value = formatValue(mask ? numericValue : value, {
      pattern,
      mask: maskPattern,
    });
  }

  return (
    <div className="grid grid-cols-1">
      <Text {...labelProps} as="label" size="sm" className="font-medium">
        {label}
      </Text>

      <input
        {...rest}
        ref={ref}
        onChange={(event) => {
          handleChange(event);
          onChange ? onChange(event) : null;
        }}
        maxLength={maskConfigs[mask as string]?.maxLength}
        className={clsx("input", {
          "--danger": error,
        })}
        inputMode="numeric"
      />

      {error ? (
        <Text size="md" variant="danger">
          {error}
        </Text>
      ) : null}
    </div>
  );
}
