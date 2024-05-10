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
      elem: item || "-",
    })),
  }));

  return { columns, rows };
}

export function formatCurrency(value: number) {
  // Arredonda o valor para duas casas decimais
  const roundedAmount = Math.round(value * 100) / 100;
  // Converte o número para uma string com duas casas decimais
  let formattedAmount = roundedAmount.toFixed(2);
  // Se a parte decimal tiver apenas um dígito, adiciona um zero à esquerda
  if (formattedAmount.split(".")[1].length === 1) {
    formattedAmount = `0${formattedAmount}`;
  }

  return formattedAmount;
}

export function moneyMask(value: string) {
  value = value.replace(".", "").replace(",", "").replace(/\D/g, "");

  const options = { minimumFractionDigits: 2 };
  const result = new Intl.NumberFormat("pt-BR", options).format(
    parseFloat(value) / 100
  );

  return "R$ " + result;
}
