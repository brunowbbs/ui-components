import { Meta, StoryObj } from '@storybook/react';
import { Search } from '.';

declare const meta: Meta<typeof Search>;
export default meta;
type Story = StoryObj<typeof Search>;
export declare const Default: Story;
export declare const WithLabel: Story;
export declare const WithError: Story;
export declare const WithElement: Story;
