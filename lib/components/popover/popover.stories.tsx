import type { Meta, StoryObj } from "@storybook/react";

import { Popover } from ".";
import { menuDotsVertical } from "../../assets";
import { Icon } from "../icon";

const meta: Meta<typeof Popover> = {
  title: "Componentes/Popover",
  component: Popover,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Componente",
      },
    },
  },
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Popover>;

export const Default: Story = {
  args: {
    children: (
      <>
        <p>children popover</p>
        <p>children popover</p>
        <p>children popover</p>
      </>
    ),
  },
};

export const Dropdown: Story = {
  args: {
    children: (
      <>
        <p>children dropdown</p>
        <p>children dropdown</p>
        <p>children dropdown</p>
      </>
    ),
    buttonProps: {
      variant: "unset",
    },
    childButton: <Icon src={menuDotsVertical} alt="ícone Dropdown" />,
    placement: "bottom right",
  },
};
