import type { PropsWithChildren } from 'react';

import type { Node } from '@react-types/shared';
import type { TableState } from 'react-stately';

export type TableCellProps = PropsWithChildren<{
  cell: Node<object>;
  state: TableState<object>;
}>;

export type TableColProps = PropsWithChildren<{
  column: Node<object>;
  state: TableState<object>;
}>;
