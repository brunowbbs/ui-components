import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from ".";
declare const meta: Meta<typeof TextArea>;
export default meta;
type Story = StoryObj<typeof TextArea>;
export declare const Default: Story;
export declare const WithLabel: Story;
export declare const WithError: Story;
