import type { Meta, StoryObj } from '@storybook/react';

import { Icon } from '.';
import { camera } from '../../assets/generated';

const meta: Meta<typeof Icon> = {
  title: 'Componentes/Icon',
  component: Icon,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente para carregar Gráficos Vetoriais Escaláveis (Svg)',
      },
    },
  },
  args: {
    src: camera,
    alt: 'cameraIcon',
    size: '1x',
  },
  argTypes: {
    alt: { description: 'Texto de descrição do ícone', type: 'string' },
    src: { description: 'JSON do Icon do ícone', type: 'symbol' },
    size: {
      description: 'Tamanhos de ícones relativos ao font-size',
      options: ['1x', '1.5x', '2x', '3x', '4x'],
      control: { type: 'select' },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Default: Story = {
  args: {},
};
