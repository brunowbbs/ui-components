import { Meta, StoryObj } from '@storybook/react';
import { SelectV2 } from '.';

declare const meta: Meta<typeof SelectV2>;
export default meta;
type Story = StoryObj<typeof SelectV2>;
export declare const Default: Story;
export declare const WithLabel: Story;
export declare const WithError: Story;
