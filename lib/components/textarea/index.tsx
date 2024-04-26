import clsx from "clsx";
import { useRef } from "react";
import { useTextField } from "react-aria";
import { Text } from "../text";

import "./styles.css";
import { InputProps } from "./types";

export function TextArea(props: InputProps) {
  const { label, errorMessage, className } = props;
  const ref = useRef(null);
  const { labelProps, inputProps } = useTextField(
    {
      ...props,
      inputElementType: "textarea",
    },
    ref
  );

  return (
    <div className="grid grid-cols-1">
      <Text {...labelProps} as="label" size="sm" className="font-medium">
        {label}
      </Text>

      <textarea
        className={clsx(className, "text-area", {
          "--danger": errorMessage,
        })}
        {...inputProps}
        ref={ref}
      />

      {errorMessage ? (
        <Text as="span" variant="danger">
          {errorMessage as string}
        </Text>
      ) : null}
    </div>
  );
}
