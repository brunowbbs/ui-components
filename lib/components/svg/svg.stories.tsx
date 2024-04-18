import type { Meta, StoryObj } from '@storybook/react';

import { Svg } from '.';
import { camera } from '../../assets/generated';

const meta: Meta<typeof Svg> = {
  title: 'Componentes/Svg',
  component: Svg,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Componente para carregar Gráficos Vetoriais Escaláveis (SVG)',
      },
    },
  },
  args: {
    alt: 'icon',
    src: camera,
    isCurrentColor: false,
  },
  argTypes: {
    alt: {
      description: 'Texto de descrição da imagem vetorial',
      type: 'string',
    },
    src: { description: 'JSON do svg', type: 'symbol' },
    color: { description: 'Cor do svg', type: 'string' },
    width: { description: 'Largura do svg', type: 'string' },
    height: { description: 'Altura do svg', type: 'string' },
    isCurrentColor: {
      description: 'Usa o cor do texto, invés da original',
      type: 'boolean',
    },
    clipPathId: {
      description: 'Identificador do svg de recorte de conteiners',
      type: 'string',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Svg>;

export const Default: Story = {
  args: {},
};
