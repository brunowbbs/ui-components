import type { Meta, StoryObj } from "@storybook/react";

import { cameraAltIconsMaterialUiOutlined } from "@leopsousaa/ui-icons/dist";
import { ButtonV2 } from ".";
import { IconLeft } from "../iconText";

const meta: Meta<typeof ButtonV2> = {
  title: "Componentes/ButtonV2",
  component: ButtonV2,
  tags: ["autodocs"],
  render: ({ ...args }) => (
    <ButtonV2 {...args}>
      <IconLeft src={cameraAltIconsMaterialUiOutlined} alt={""} />
      Teste
    </ButtonV2>
  ),
  args: {},
  argTypes: {
    title: {
      description: "Atributo de título html",
      control: { type: "text" },
    },
    children: { description: "Label do botão" },
    isOutlined: {
      description: "Label do botão",
      type: "boolean",
      defaultValue: false,
    },
    isLink: {
      description: "Aparência de link",
      type: "boolean",
      defaultValue: false,
    },
    isDisabled: {
      description: "Botão desativado",
      type: "boolean",
      defaultValue: false,
    },
    isSummary: {
      description: "Botão do acordeão",
      type: "boolean",
      defaultValue: false,
    },
    isVertical: {
      description: "Botão vertical",
      type: "boolean",
      defaultValue: false,
    },
    isLoading: {
      description: "Loading no botão",
      type: "boolean",
      defaultValue: false,
    },
    onPress: {
      description: "Evento ao pressionar",
      action: "button-press",
      type: "function",
    },
    variant: {
      description: "Variações de cor",
      options: ["danger", "success", "primary", "secondary", "warning"],
      control: { type: "select" },
      defaultValue: "primary",
    },
    size: {
      options: ["xs", "sm", "md", "lg", "xl"],
      control: { type: "select" },
      defaultValue: "regular",
    },
  },
};

export default meta;

type Story = StoryObj<typeof ButtonV2>;

export const Default: Story = {};
