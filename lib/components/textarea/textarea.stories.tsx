import type { Meta, StoryObj } from "@storybook/react";

import { TextArea } from ".";

const meta: Meta<typeof TextArea> = {
  title: "Componentes/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  render: ({ ...args }) => <TextArea {...args} />,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {
  args: {
    placeholder: "Placeholder",
  },
};

export const WithLabel: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
  },
};

export const WithError: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    errorMessage: "error",
  },
};
