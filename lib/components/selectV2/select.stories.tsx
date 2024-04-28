import { Meta, StoryObj } from "@storybook/react";

import { SelectV2 } from ".";

const meta: Meta<typeof SelectV2> = {
  title: "Componentes/SelectV2",
  component: SelectV2,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente",
      },
    },
  },
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SelectV2>;

function ComponentRenderDefault() {
  const states = [
    { label: "Acre", key: "AC" },
    { label: "Alagoas", key: "AL" },
    { label: "Amapá", key: "AP" },
    { label: "Amazonas", key: "AM" },
    { label: "Bahia", key: "BA" },
    { label: "Ceará", key: "CE" },
    { label: "Distrito Federal", key: "DF" },
    { label: "Espírito Santo", key: "ES" },
    { label: "Goiás", key: "GO" },
    { label: "Maranhão", key: "MA" },
    { label: "Mato Grosso", key: "MT" },
    { label: "Mato Grosso do Sul", key: "MS" },
    { label: "Minas Gerais", key: "MG" },
    { label: "Pará", key: "PA" },
    { label: "Paraíba", key: "PB" },
    { label: "Paraná", key: "PR" },
    { label: "Pernambuco", key: "PE" },
    { label: "Piauí", key: "PI" },
    { label: "Rio de Janeiro", key: "RJ" },
    { label: "Rio Grande do Norte", key: "RN" },
    { label: "Rio Grande do Sul", key: "RS" },
    { label: "Rondônia", key: "RO" },
    { label: "Roraima", key: "RR" },
    { label: "Santa Catarina", key: "SC" },
    { label: "São Paulo", key: "SP" },
    { label: "Sergipe", key: "SE" },
    { label: "Tocantins", key: "TO" },
  ];

  return <SelectV2 items={states} />;
}

function ComponentRenderWithLabel() {
  const states = [
    { label: "Acre", key: "AC" },
    { label: "Alagoas", key: "AL" },
    { label: "Amapá", key: "AP" },
    { label: "Amazonas", key: "AM" },
    { label: "Bahia", key: "BA" },
    { label: "Ceará", key: "CE" },
    { label: "Distrito Federal", key: "DF" },
    { label: "Espírito Santo", key: "ES" },
    { label: "Goiás", key: "GO" },
    { label: "Maranhão", key: "MA" },
    { label: "Mato Grosso", key: "MT" },
    { label: "Mato Grosso do Sul", key: "MS" },
    { label: "Minas Gerais", key: "MG" },
    { label: "Pará", key: "PA" },
    { label: "Paraíba", key: "PB" },
    { label: "Paraná", key: "PR" },
    { label: "Pernambuco", key: "PE" },
    { label: "Piauí", key: "PI" },
    { label: "Rio de Janeiro", key: "RJ" },
    { label: "Rio Grande do Norte", key: "RN" },
    { label: "Rio Grande do Sul", key: "RS" },
    { label: "Rondônia", key: "RO" },
    { label: "Roraima", key: "RR" },
    { label: "Santa Catarina", key: "SC" },
    { label: "São Paulo", key: "SP" },
    { label: "Sergipe", key: "SE" },
    { label: "Tocantins", key: "TO" },
  ];

  return <SelectV2 items={states} label="label" />;
}

function ComponentRenderWithError() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <SelectV2 items={reason} label="label" error="error" />;
}

export const Default: Story = {
  render: () => <ComponentRenderDefault />,
};

export const WithLabel: Story = {
  render: () => <ComponentRenderWithLabel />,
};

export const WithError: Story = {
  render: () => <ComponentRenderWithError />,
};
