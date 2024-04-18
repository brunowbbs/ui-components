import { forwardRef } from "react";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";

import { Svg } from "../svg";
import type { IconProps } from "./types";

export const Icon = forwardRef<SVGSVGElement, IconProps>(
  ({ className, size = "1x", ...props }, ref) => {
    const forwardedRef = useForwardedRef(ref);

    const iconSize = {
      "1x": "1.2em",
      "1.5x": "1.8em",
      "2x": "2.4em",
      "3x": "3.6em",
      "4x": "4.8em",
    }[size];

    return (
      <Svg
        className={className}
        isCurrentColor
        width={iconSize}
        height={iconSize}
        ref={forwardedRef}
        {...props}
      />
    );
  }
);
