import type { Meta, StoryObj } from "@storybook/react";

import { Table } from ".";
import { mountDataTable } from "../..";

const { columns, rows } = mountDataTable(
  ["Id", "Date", "Status", "Customer", "Purchased"],
  [
    ["1", "01 de mar 24", "pending", "John", "unpaid"],
    ["2", "12 de mar 24", "processed", "Leo", "paid"],
    ["3", "21 de mar 25", "processed", "Bruno", "paid"],
  ]
);

const meta: Meta<typeof Table> = {
  component: Table,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Componente de acordeão para colapsar conteúdos.",
      },
    },
  },
  tags: ["autodocs"],
  argTypes: {
    columns: {
      description:
        "Lista de elementos que será renderizado nas colunas. Obs.: Para montar essa lista temos a função utilitária mountDataTable.",
    },
    rows: {
      description:
        "Lista de elementos que será renderizado nas linhas. Obs.: Para montar essa lista temos a função utilitária mountDataTable.",
    },
    onRowAction: {
      description: "Evento que captura a linha da tabela.",
    },
    mode: {
      description: "Define o modelo a ser renderizado da tabela.",
    },
    disabled: {
      description:
        "Lista de keys determinadas nas linhas para desativar a mesma.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  args: {
    columns,
    rows,
  },
};

export const Multiples: Story = {
  args: {
    columns,
    rows,
    mode: "multiple",
  },
};
