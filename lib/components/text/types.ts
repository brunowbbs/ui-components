import type { PropsWithChildren } from 'react';
import { ThemeVariant } from '../..';

export type TextSize =
  | '2xl'
  | '3xl'
  | '4xl'
  | '5xl'
  | '6xl'
  | 'lg'
  | 'md'
  | 'sm'
  | 'xl'
  | 'xs';

export type TextTags =
  | 'a'
  | 'blockquote'
  | 'caption'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'label'
  | 'li'
  | 'mark'
  | 'p'
  | 'span'
  | 'strong';

export type TextElement = HTMLElementTagNameMap[TextTags];

export type TextProps<As = TextTags> = PropsWithChildren<{
  as?: As;
  size?: TextSize;
  className?: string;
  variant?: ThemeVariant;
  mode?: 'block' | 'unset';
}>;
