import { Meta, StoryObj } from "@storybook/react";

import { Menu } from ".";

const meta: Meta<typeof Menu> = {
  title: "Componentes/Menu",
  component: Menu,
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

type Story = StoryObj<typeof Menu>;

function ComponentRenderDefault() {
  const reason = [
    { key: 1, label: "insatisfação com o preço" },
    { key: 2, label: "insatisfação com o produto" },
    { key: 3, label: "insatisfação com o atendimento" },
    { key: 4, label: "arrependimento" },
    { key: 5, label: "outros" },
  ];

  return <Menu childButton="Menu" items={reason} onAction={console.log} />;
}

export const Default: Story = {
  render: () => <ComponentRenderDefault />,
};
