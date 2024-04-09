import type { Meta, StoryObj } from "@storybook/react";

import { IconFirst, IconLast, IconText } from ".";
import { html } from "../../assets/generated";

const meta: Meta<typeof IconText> = {
  component: IconText,
  tags: ["autodocs"],
  args: {},
  render: ({ ...args }) => (
    <IconText {...args}>
      <IconFirst size="4x" src={html} alt="htmlIcons" />
      Componente Renderizador de ícones
      <IconLast src={html} alt="htmlIcons" />
    </IconText>
  ),
  argTypes: {
    size: {
      description: "Tamanho dos textos",
      control: { type: "select" },
      defaultValue: "md",
      options: [
        "2xl",
        "3xl",
        "4xl",
        "5xl",
        "6xl",
        "lg",
        "md",
        "sm",
        "xl",
        "xs",
      ],
    },
    isVertical: {
      description: "Componente muda sua orientção para vertical",
      type: "boolean",
    },
  },
};

export default meta;

type Story = StoryObj<typeof IconText>;

export const Default: Story = {
  args: {},
};
