import { Meta, StoryObj } from "@storybook/react";

import { Select } from ".";

const meta: Meta<typeof Select> = {
  title: "Componentes/Select",
  component: Select,
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

type Story = StoryObj<typeof Select>;

function ComponentRenderDefault() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <Select items={reason} />;
}

function ComponentRenderWithLabel() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <Select items={reason} label="label" />;
}

function ComponentRenderWithError() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <Select items={reason} label="label" error="error" />;
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
