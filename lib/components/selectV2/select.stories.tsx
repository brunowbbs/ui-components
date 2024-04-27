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
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <SelectV2 items={reason} />;
}

function ComponentRenderWithLabel() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <SelectV2 items={reason} label="label" />;
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
