import type { PropsWithChildren } from 'react';

import type { Node } from '@react-types/shared';
import type { TableState } from 'react-stately';

export type TableRowProps = PropsWithChildren<{
  item: Node<object>;
  state: TableState<object>;
}>;
