import type { Meta, StoryObj } from "@storybook/react";

import { InputMask } from ".";

const meta: Meta<typeof InputMask> = {
  title: "Componentes/InputMask",
  component: InputMask,
  tags: ["autodocs"],
  render: ({ ...args }) => <InputMask {...args} />,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof InputMask>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
    "aria-label": "Input example",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    error: "Message error",
  },
};
