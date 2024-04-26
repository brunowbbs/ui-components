import type { Meta, StoryObj } from "@storybook/react";

import { InputWithMask } from ".";

const meta: Meta<typeof InputWithMask> = {
  title: "Componentes/InputWithMask",
  component: InputWithMask,
  tags: ["autodocs"],
  render: ({ ...args }) => <InputWithMask {...args} />,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof InputWithMask>;

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
