import { PropsWithChildren } from 'react';
import { Vector } from '../../components/svg/types';

export type IconsListProps = PropsWithChildren<{
    icons: Record<string, Record<symbol, Vector>>;
    isCurrentColor?: boolean;
    width?: string;
}>;
