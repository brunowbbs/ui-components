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

  return (
    <div className={`flex flex-col w-${props.width ?? "full"}`}>
      <p className="text-sm font-medium">{props.label}</p>
      <div className="border rounded-sm py-0.5 relative">
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
          />
        ) : (
          <ReactInputMask
            {...props}
            className="w-full text-sm outline-none bg-white px-2"
            mask={mask}
            maskChar="_"
            value={props.value}
            onChange={props.onChange}
          />
        )}
      </div>
    </div>
  );
}
