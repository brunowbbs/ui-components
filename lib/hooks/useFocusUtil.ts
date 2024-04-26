import { useState } from "react";
import { useFocus } from "react-aria";

export function useFocusUtil() {
  const [events, setEvents] = useState<string[]>([]);

  const { focusProps } = useFocus({
    onFocus: () => {
      setEvents((e) => [...e, "focus"]);
    },
    onBlur: () => {
      setEvents((e) => [...e, "blur"]);
    },
    onFocusChange: (isFocused) => {
      setEvents((e) => [...e, `focus change: ${isFocused}`]);
    },
  });

  return { focusProps, events };
}
