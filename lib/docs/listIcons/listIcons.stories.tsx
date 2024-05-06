import type { Meta } from "@storybook/react";

import * as icons from "@leopsousaa/ui-icons/dist";

import { Icons } from ".";

const meta: Meta<typeof Icons> = {
  title: "Docs/Icons",
  component: Icons,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
    controls: { disable: true },
    previewTabs: { canvas: { hidden: true } },

    docs: {
      description: {
        component: "Lista de ícones.",
      },
    },
  },
};

export default meta;

export const ListIcons = () => <Icons icons={icons} isCurrentColor />;
