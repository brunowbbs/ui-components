import type { Meta, StoryObj } from '@storybook/react';

import { MdHeadphones, MdHome, MdPhone } from 'react-icons/md';
import { Wizard } from '.';

const meta: Meta<typeof Wizard> = {
  title: 'Componentes/Wizard',
  component: Wizard,
  tags: ['autodocs'],
  args: {
    steps: [
      {
        component: <span>Step 1</span>,
        name: 'Step 1',
        icon: <MdHome size={22} />,
      },
      {
        component: <span>Step 2</span>,
        name: 'Step 2',
        icon: <MdPhone size={22} />,
      },
      {
        component: <span>Step 3</span>,
        name: 'Step 3',
        icon: <MdHeadphones size={22} />,
      },
    ],
  },
  argTypes: {
    steps: {
      description:
        'Componente que renderiza o passo a passo através de uma lista de objetos',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Wizard>;

export const Default: Story = {
  args: {},
};
