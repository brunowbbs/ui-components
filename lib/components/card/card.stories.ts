import type { Meta, StoryObj } from "@storybook/react";

import { Card } from ".";

const meta: Meta<typeof Card> = {
  component: Card,
  tags: ["autodocs"],
  args: {
    children: "child card",
  },
  argTypes: {
    children: {
      description:
        "Componente que renderiza um componente filho dentro de uma box (Card)",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {},
};
