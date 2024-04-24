type DataRow = Array<string | number | JSX.Element>;

export function mountDataTable(
  dataColumns: Array<string | number | JSX.Element>,
  dataRows: Array<DataRow>
) {
  const columns = dataColumns.map((column) => ({
    key: String(column).toLowerCase(),
    elem: column,
  }));

  const rows = dataRows.map((row, rowIndex) => ({
    key: String(rowIndex),
    items: row.map((item, columnIndex) => ({
      key: String(dataColumns[columnIndex]).toLowerCase(),
      elem: item,
    })),
  }));

  return { columns, rows };
}
