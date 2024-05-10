import type { Meta, StoryObj } from "@storybook/react";

import { Input } from ".";

const meta: Meta<typeof Input> = {
  title: "Componentes/Input",
  component: Input,
  tags: ["autodocs"],
  render: ({ ...args }) => <Input {...args} />,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
  },
};

export const Error: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    error: "Message error",
  },
};

export const Money: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    mask: "money",
    value: "5000",
  },
};

export const Cep: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    mask: "cep",
    value: "00000000",
  },
};

export const Cpf: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    mask: "cpf",
    value: "00000000000",
  },
};

export const Cnpj: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    mask: "cnpj",
    value: "00000000000000",
  },
};

export const Phone: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    mask: "phone",
    value: "00000000000",
  },
};

export const Password: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    type: "password",
  },
};

export const Disabled: Story = {
  args: {
    label: "Label",
    placeholder: "Placeholder",
    "aria-label": "Input example",
    isDisabled: true,
  },
};
