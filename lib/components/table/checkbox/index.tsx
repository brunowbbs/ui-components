import React from "react";
import { useCheckbox } from "react-aria";
import { useToggleState } from "react-stately";

export function Checkbox(props) {
  const ref = React.useRef(null);

  const state = useToggleState(props);
  const { inputProps } = useCheckbox(props, state, ref);

  return <input {...inputProps} ref={ref} style={props.style} />;
}
