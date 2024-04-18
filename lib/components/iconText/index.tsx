import { Children, forwardRef } from 'react';

import useForwardedRef from '@bedrock-layout/use-forwarded-ref';
import clsx from 'clsx';
import { beSlot, useSlots } from 'use-slots';

import type { IconTextElement, IconTextProps } from './types';

import { Text } from '..';

import { Icon } from '../icon';
import { IconProps } from '../icon/types';

export const IconText = forwardRef<IconTextElement, IconTextProps>(
  ({ children, isVertical = false, as, size }, ref) => {
    const forwardedRef = useForwardedRef(ref);

    const { leftIcon, rightIcon } = useSlots(children);

    const text = Children.toArray(children).find(
      (child: any) => !child?.type?.slot,
    );

    return (
      <Text
        as={as}
        size={size}
        ref={forwardedRef}
        className={clsx('icon-text', {
          '--vertical': isVertical,
        })}
        mode="unset"
      >
        {leftIcon}
        {text}
        {rightIcon}
      </Text>
    );
  },
);

export const IconLeft = beSlot(
  (props: IconProps) => <Icon {...props} />,
  'leftIcon',
);

export const IconRight = beSlot(
  (props: IconProps) => <Icon {...props} />,
  'rightIcon',
);
