import { Meta, StoryObj } from "@storybook/react";

import { Search } from ".";
import { Text } from "../text";

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
    {
      key: 1,
      render: "insatisfação com o preço",
      filterValue: "insatisfação com o preço",
    },
    {
      key: 2,
      render: "insatisfação com o produto",
      filterValue: "insatisfação com o produto",
    },
    {
      key: 3,
      render: "insatisfação com o atendimento",
      filterValue: "insatisfação com o atendimento",
    },
    {
      key: 4,
      render: "arrependimento",
      filterValue: "arrependimento",
    },
    {
      key: 5,
      render: "outros",
      filterValue: "outros",
    },
  ];

  return <Search items={reason} />;
}

function ComponentRenderWithLabel() {
  const reason = [
    {
      key: 1,
      render: "insatisfação com o preço",
      filterValue: "insatisfação com o preço",
    },
    {
      key: 2,
      render: "insatisfação com o produto",
      filterValue: "insatisfação com o produto",
    },
    {
      key: 3,
      render: "insatisfação com o atendimento",
      filterValue: "insatisfação com o atendimento",
    },
    {
      key: 4,
      render: "arrependimento",
      filterValue: "arrependimento",
    },
    {
      key: 5,
      render: "outros",
      filterValue: "outros",
    },
  ];
  return <Search items={reason} label="label" />;
}

function ComponentRenderWithError() {
  const reason = [
    {
      key: 1,
      render: "insatisfação com o preço",
      filterValue: "insatisfação com o preço",
    },
    {
      key: 2,
      render: "insatisfação com o produto",
      filterValue: "insatisfação com o produto",
    },
    {
      key: 3,
      render: "insatisfação com o atendimento",
      filterValue: "insatisfação com o atendimento",
    },
    {
      key: 4,
      render: "arrependimento",
      filterValue: "arrependimento",
    },
    {
      key: 5,
      render: "outros",
      filterValue: "outros",
    },
  ];

  return <Search items={reason} label="label" error="error" />;
}

function ComponentRenderWithElement() {
  const reason = [
    {
      key: 1,
      render: "insatisfação com o preço",
      filterValue: "insatisfação com o preço",
    },
    {
      key: 2,
      render: "insatisfação com o produto",
      filterValue: "insatisfação com o produto",
    },
    {
      key: 3,
      render: "insatisfação com o atendimento",
      filterValue: "insatisfação com o atendimento",
    },
    {
      key: 4,
      render: "arrependimento",
      filterValue: "arrependimento",
    },
    {
      key: 5,
      render: (
        <div>
          <div className="flex flex-row justify-between">
            <Text>Produto</Text>
            <Text>R$ 300,00</Text>
          </div>
          <div className="flex flex-row justify-between">
            <Text>Descrição longa</Text>
          </div>
        </div>
      ),
      filterValue: "outros",
    },
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

export const WithElement: Story = {
  render: () => <ComponentRenderWithElement />,
};
