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
    variant: {
      description: "Varição dos textos conforme o tema usado",
      control: { type: "select" },
      defaultValue: "primary",
      options: ["danger", "success", "primary", "secondary", "warning"],
    },
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    variant: "primary",
  },
};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Danger: Story = {
  args: {
    variant: "danger",
  },
};

export const Warning: Story = {
  args: {
    variant: "warning",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};
