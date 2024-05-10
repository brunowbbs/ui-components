import type { Meta, StoryObj } from "@storybook/react";

import { cameraAltIconsMaterialUiOutlined } from "@leopsousaa/ui-icons/dist";
import { IconLeft, IconRight, IconText } from ".";

const meta: Meta<typeof IconText> = {
  title: "Componentes/IconText",
  component: IconText,
  tags: ["autodocs"],
  args: {},
  render: ({ ...args }) => (
    <IconText {...args}>
      <IconLeft
        size="4x"
        src={cameraAltIconsMaterialUiOutlined}
        alt="cameraIcons"
      />
      Componente Renderizador de ícones
      <IconRight src={cameraAltIconsMaterialUiOutlined} alt="cameraIcons" />
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
