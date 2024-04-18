/* eslint-disable @typescript-eslint/no-explicit-any */
import { forwardRef, useCallback, useMemo } from 'react';

import { useId } from '@react-aria/utils';

import type { SvgProps } from './types';

export const Svg = forwardRef<SVGSVGElement, SvgProps>(
  (
    {
      alt,
      src,
      color,
      className,
      clipPathId,
      isCurrentColor = false,
      width = '100%',
      height = '100%',
    },
    ref,
  ) => {
    const ariaId = useId(alt?.replace(/\s/g, '-'));

    const jsonToJSX = useCallback(
      ({ tag: Tag, props, children }: any, i = 0) => {
        const svgProps = { ref, width, height, 'aria-hidden': 'true' };

        const pathProps = {
          fill: isCurrentColor
            ? 'currentColor'
            : color ??
              props?.fill?.replace(/^url\((.*)\)$/, `url($1-${ariaId})`),
        };

        return (
          <Tag
            {...props}
            {...(Tag == 'svg' && svgProps)}
            {...(Tag == 'path' && pathProps)}
            key={`${ariaId}-${i}`}
            id={props.id && `${props.id}${ariaId}`}
          >
            {children?.map(jsonToJSX)}
          </Tag>
        );
      },
      [ref, width, height, isCurrentColor, color, ariaId],
    );

    const svg = useMemo(() => src && jsonToJSX(src), [src, jsonToJSX]);

    return (
      <i
        className={className}
        role={'img'}
        aria-label={alt}
        aria-hidden={!!clipPathId}
      >
        {svg}
      </i>
    );
  },
);
