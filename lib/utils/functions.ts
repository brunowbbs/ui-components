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
  if (!value) return "";
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
  if (!value) return "";

  // Remove todos os caracteres não numéricos
  const cleanedValue = value.replace(/\D/g, "");

  // Se o valor for menor que 3 dígitos, adiciona zeros à esquerda para garantir a formatação correta
  const numericValue = parseFloat(cleanedValue.padStart(3, "0")) / 100;

  // Formata o valor para representar uma moeda
  const formattedValue = numericValue.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return formattedValue;
}
