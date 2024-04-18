import * as icons from '../../assets/generated';

import type { Meta } from '@storybook/react';

import { Icons } from '.';

const meta: Meta<typeof Icons> = {
  title: 'Docs/Icons',
  component: Icons,
  tags: ['autodocs'],
  parameters: {
    layout: 'padded',
    controls: { disable: true },
    previewTabs: { canvas: { hidden: true } },

    docs: {
      description: {
        component: 'Lista de ícones.',
      },
    },
  },
};

export default meta;

export const ListIcons = () => <Icons isCurrentColor icons={icons} />;
