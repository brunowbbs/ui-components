import clsx from "clsx";
import {
  Children,
  DependencyList,
  EffectCallback,
  Ref,
  forwardRef,
  useEffect,
  useRef,
} from "react";

import { ButtonProps } from "./types";

import { useForwardedRef } from "@bedrock-layout/use-forwarded-ref";
import { useButton, useToggleButton } from "react-aria";
import { useToggleState } from "react-stately";

import { useSlots } from "use-slots";
import { IconText } from "../iconText";

import { Spinner } from "..";
import "./styles.css";

const atLeast = (minimum: number, ...args: unknown[]) => {
  return args.filter(Boolean).length >= minimum;
};

function useComponentDidUpdate(effect: EffectCallback, deps: DependencyList) {
  const didMount = useRef(false);

  useEffect(function handleDidUpdate() {
    if (didMount.current) {
      effect();
    } else {
      didMount.current = true;
    }
  }, deps);
}

export const ButtonV2 = forwardRef(
  (props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {
      variant = "primary",
      children,
      isSummary,
      isLink,
      className,
      isTogglable,
      onToggle,
      isLoading,
      isOutlined,
      isVertical,
      isDisabled,
      title,
      size,
    } = props;

    const forwardedRef = useForwardedRef(ref);

    const state = useToggleState(props);
    const toggleButton = useToggleButton(props, state, forwardedRef);
    const normalButton = useButton(props, forwardedRef);
    const { firstIcon, lastIcon } = useSlots(children);

    const Tag = isSummary ? "summary" : "button";

    const onlyOne = Children.count(children) === 1;

    const hasIcon = atLeast(1, firstIcon, lastIcon);

    const isIconButton = hasIcon && onlyOne;

    const { buttonProps, isPressed } = isTogglable
      ? toggleButton
      : normalButton;

    useComponentDidUpdate(() => {
      isTogglable && onToggle?.(state);
    }, [state.isSelected]);

    return (
      <Tag
        role="button"
        {...buttonProps}
        ref={forwardedRef}
        title={title}
        aria-pressed={isTogglable ? state.isSelected : isPressed}
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
      >
        <IconText isVertical={isVertical}>
          {isLoading ? (
            <div className="mt-auto mb-auto min-w-24 flex items-center justify-center">
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