import { RowTypes } from '../components/table/types';

export function mountDataTable(
  dataColumns: Array<string | number | JSX.Element>,
  dataRows: Array<Array<string | number | JSX.Element>>,
) {
  let tempRows: Array<RowTypes> = [];

  dataColumns.forEach((_, indexColumn) => {
    tempRows = dataRows.map((lines, index) => {
      return {
        key: index.toString(),
        items: lines.map((line, lineIndex) => {
          if (dataColumns && lines[indexColumn]) {
            return {
              key: dataColumns[lineIndex].toString().toLowerCase(),
              elem: line,
            };
          } else {
            return { key: '', elem: '' };
          }
        }),
      };
    });
  });

  const tempColumns = dataColumns.map((column) => {
    return {
      key: column?.toString()?.toLowerCase(),
      elem: column,
    };
  });

  return {
    columns: tempColumns,
    rows: tempRows,
  };
}
