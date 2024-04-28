import { Meta, StoryObj } from "@storybook/react";

import { Search } from ".";

const meta: Meta<typeof Search> = {
  title: "Componentes/Search",
  component: Search,
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

type Story = StoryObj<typeof Search>;

function ComponentRenderDefault() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <Search items={reason} />;
}

function ComponentRenderWithLabel() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <Search items={reason} label="label" />;
}

function ComponentRenderWithError() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <Search items={reason} label="label" error="error" />;
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
