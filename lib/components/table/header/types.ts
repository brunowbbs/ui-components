import type {
  DetailedHTMLProps,
  PropsWithChildren,
  ThHTMLAttributes,
} from 'react';

import type { TableState } from '@react-stately/table';
import type { GridNode } from '@react-types/grid';
import type { Node } from '@react-types/shared';

type TagTable = 'tbody' | 'thead';

export type TableElement = HTMLElementTagNameMap[TagTable];

export type TableRowGroupProps = PropsWithChildren<{
  type: TagTable;
}>;

export type TableHeaderRowProps = PropsWithChildren<{
  item: GridNode<object>;
  state: TableState<object>;
}>;

export type TableColumnHeaderProps = DetailedHTMLProps<
  ThHTMLAttributes<HTMLTableCellElement>,
  HTMLTableCellElement
> &
  PropsWithChildren<{
    state: TableState<object>;
    column: Node<unknown>;
  }>;
