import { Children, forwardRef } from "react";

import useForwardedRef from "@bedrock-layout/use-forwarded-ref";
import clsx from "clsx";
import { beSlot, useSlots } from "use-slots";

import type { IconTextElement, IconTextProps } from "./types";

import { Text } from "..";

import { Icon } from "../icon";
import { IconProps } from "../icon/types";

import "./styles.css";

export const IconText = forwardRef<IconTextElement, IconTextProps>(
  ({ children, isVertical = false, as, size }, ref) => {
    const forwardedRef = useForwardedRef(ref);

    const { firstIcon, lastIcon } = useSlots(children);

    const text = Children.toArray(children).find(
      (child: any) => !child?.type?.slot
    );

    return (
      <Text
        as={as}
        size={size}
        ref={forwardedRef}
        className={clsx("icon-text", {
          "--vertical": isVertical,
        })}
      >
        {firstIcon}
        {text}
        {lastIcon}
      </Text>
    );
  }
);

export const IconFirst = beSlot(
  (props: IconProps) => <Icon {...props} />,
  "firstIcon"
);

export const IconLast = beSlot(
  (props: IconProps) => <Icon {...props} />,
  "lastIcon"
);
