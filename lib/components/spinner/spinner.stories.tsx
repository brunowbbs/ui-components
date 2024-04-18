import type { Meta, StoryObj } from '@storybook/react';

import { Spinner } from '.';

const meta: Meta<typeof Spinner> = {
  title: 'Componentes/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  render: ({ ...args }) => <Spinner {...args} />,
  args: {},
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {},
};
