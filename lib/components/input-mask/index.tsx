import clsx from "clsx";
import { useState } from "react";
import CurrencyInput from "react-currency-input-field";
import ReactInputMask from "react-input-mask";
import { InputProps } from "./types";

export function InputMask(props: InputProps) {
  let mask = "";

  if (props.type === "phone") {
    mask = "(99) 99999-9999";
  } else if (props.type === "cnpj") {
    mask = "99.999.999/9999-99";
  } else if (props.type === "cpf") {
    mask = "999.999.999-99";
  }

  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={`flex flex-col w-${props.width ?? "full"}`}>
      <p className="text-sm font-medium">{props.label}</p>
      <div
        className={clsx(
          "border border-gray-400 rounded-md py-[2.5px] relative",
          {
            "border-primary": isFocused,
            "border-red-600": props.error,
          }
        )}
      >
        {props.type === "money" ? (
          <CurrencyInput
            className="outline-none px-2 p-0 w-full text-sm"
            name="input-name"
            placeholder="Digite um valor"
            prefix="R$ "
            groupSeparator="."
            decimalSeparator=","
            allowNegativeValue={false}
            decimalsLimit={2}
            decimalScale={2}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(event) => props.onChangeValue(event.target.value)}
          />
        ) : (
          <ReactInputMask
            {...props}
            className="w-full text-sm outline-none bg-white px-2"
            mask={mask}
            maskChar="_"
            value={props.value}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            onChange={(event) => props.onChangeValue(event.target.value)}
          />
        )}
      </div>
      {props.error && <p className="text-[10px] text-red-600">{props.error}</p>}
    </div>
  );
}
