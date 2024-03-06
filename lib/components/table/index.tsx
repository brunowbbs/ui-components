import { useRef } from "react";
import { useTable } from "react-aria";
import {
  Cell,
  Column,
  Row,
  TableBody,
  TableHeader,
  useTableState,
} from "react-stately";
import { TableCell, TableCheckboxCell, TableSelectAllCell } from "./cell";
import { TableColumnHeader, TableHeaderRow, TableRowGroup } from "./header";
import { TableRow } from "./row";
import { CustomTableProps, ItemsTypes, RowTypes, TableProps } from "./types";

import "./styles.css";

function CustomTable(props: CustomTableProps) {
  const { selectionMode, selectionBehavior } = props;

  const state = useTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  const ref = useRef();
  const { collection } = state;
  const { gridProps } = useTable(props, state, ref);

  return (
    <table {...gridProps} ref={ref} className="custom-table">
      <TableRowGroup type="thead">
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {[...headerRow.childNodes].map((column) =>
              column.props.isSelectionCell ? (
                <TableSelectAllCell
                  key={column.key}
                  column={column}
                  state={state}
                />
              ) : (
                <TableColumnHeader
                  key={column.key}
                  column={column}
                  state={state}
                />
              )
            )}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup type="tbody">
        {[...collection.body.childNodes].map((row) => (
          <TableRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) =>
              cell.props.isSelectionCell ? (
                <TableCheckboxCell key={cell.key} cell={cell} state={state} />
              ) : (
                <TableCell key={cell.key} cell={cell} state={state} />
              )
            )}
          </TableRow>
        ))}
      </TableRowGroup>
    </table>
  );
}

export function Table({ columns, rows, mode = "none" }: TableProps) {
  return (
    <div className="safearea-table">
      <CustomTable aria-label="Tabela" selectionMode={mode}>
        <TableHeader>
          {columns.map((column: ItemsTypes) => (
            <Column key={column}>{column}</Column>
          ))}
        </TableHeader>

        <TableBody>
          {rows.map(({ key, items }: RowTypes) => (
            <Row key={key}>
              {items.map((item: ItemsTypes) => (
                <Cell key={item}>{item}</Cell>
              ))}
            </Row>
          ))}
        </TableBody>
      </CustomTable>
    </div>
  );
}
