import type { Meta, StoryObj } from "@storybook/react";

import { Text } from ".";

const meta: Meta<typeof Text> = {
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Text",
  },
  argTypes: {
    as: {
      description: "Tags html de textos",
      control: { type: "select" },
      defaultValue: "span",
      options: [
        "a",
        "blockquote",
        "caption",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "label",
        "li",
        "mark",
        "p",
        "span",
        "strong",
      ],
    },
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
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Default: Story = {
  args: {},
};
