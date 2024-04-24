import clsx from "clsx";
import { Children, Ref, forwardRef } from "react";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";
import { useButton } from "react-aria";

import { useSlots } from "use-slots";
import { IconText } from "../iconText";

import { Spinner } from "..";
import "./styles.css";
import { ButtonProps } from "./types";

const atLeast = (minimum: number, ...args: unknown[]) => {
  return args.filter(Boolean).length >= minimum;
};

export const ButtonV2 = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      variant = "primary",
      children,
      isSummary,
      isLink,
      className,
      isLoading,
      isOutlined,
      isVertical,
      isDisabled,
      title,
      size,
    } = props;

    const forwardedRef = useForwardedRef(ref);

    const normalButton = useButton(props, forwardedRef);
    const { firstIcon, lastIcon } = useSlots(children);

    const Tag = isSummary ? "summary" : "button";

    const onlyOne = Children.count(children) === 1;

    const hasIcon = atLeast(1, firstIcon, lastIcon);

    const isIconButton = hasIcon && onlyOne;

    const { buttonProps, isPressed } = normalButton;

    return (
      <Tag
        role="button"
        {...buttonProps}
        ref={forwardedRef}
        title={title}
        aria-pressed={isPressed}
        onKeyDown={isSummary ? undefined : buttonProps.onKeyDown}
        className={clsx(className, {
          button: !isLink,
          link: isLink,
          "--icon": isIconButton,
          "--primary": variant === "primary",
          "--secondary": variant === "secondary",
          "--danger": variant === "danger",
          "--success": variant === "success",
          "--warning": variant === "warning",
          "--disabled": isDisabled,
          "--outlined": isOutlined,
          "--loading": isLoading,
          "--xs": size === "xs",
          "--sm": size === "sm",
          "--md": size === "md",
          "--lg": size === "lg",
          "--xl": size === "xl",
        })}
        disabled={isLoading}
      >
        <IconText isVertical={isVertical}>
          {isLoading ? (
            <div className="mt-auto mb-auto flex items-center justify-center">
              <Spinner color={isOutlined ? "green" : "white"} />
            </div>
          ) : (
            children
          )}
        </IconText>
      </Tag>
    );
  }
);
