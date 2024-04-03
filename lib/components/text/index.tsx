import { forwardRef } from "react";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";
import clsx from "clsx";

import type { TextElement, TextProps } from "./types";

import "./styles.css";

export const Text = forwardRef<TextElement, TextProps>(
  (
    { as: Tag = "span", size = "sm", variant, children, className, ...props },
    ref
  ) => {
    const forwardedRef = useForwardedRef(ref);

    return (
      <Tag
        {...(props as TextProps<typeof Tag>)}
        ref={forwardedRef}
        className={clsx(className, "text", {
          "--primary": variant === "primary",
          "--secondary": variant === "secondary",
          "--danger": variant === "danger",
          "--success": variant === "success",
          "--6xl": size === "6xl",
          "--5xl": size === "5xl",
          "--4xl": size === "4xl",
          "--3xl": size === "3xl",
          "--2xl": size === "2xl",
          "--xl": size === "xl",
          "--lg": size === "lg",
          "--md": size === "md",
          "--sm": size === "sm",
          "--xs": size === "xs",
        })}
      >
        {children}
      </Tag>
    );
  }
);
