import { PropsWithChildren } from 'react';
import { Node } from '@react-types/shared';
import { TableState } from 'react-stately';

export type TableRowProps = PropsWithChildren<{
    item: Node<object>;
    state: TableState<object>;
}>;
