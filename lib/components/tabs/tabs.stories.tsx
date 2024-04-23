import { Meta, StoryObj } from "@storybook/react";

import { Tabs } from ".";

const meta: Meta<typeof Tabs> = {
  title: "Componentes/Tabs",
  component: Tabs,
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

type Story = StoryObj<typeof Tabs>;

function ComponentRenderDefault() {
  return (
    <Tabs
      aria-label="History of Ancient Rome"
      tabs={[
        {
          title: "Tab 1",
          content: (
            <div className="text-sm">
              <p>Content for Tab 1</p>
            </div>
          ),
        },
        {
          title: "Tab 2",
          content: (
            <div className="text-sm">
              <p>Content for Tab 2</p>
            </div>
          ),
        },
        {
          title: "Tab 3",
          content: (
            <div className="text-sm">
              <p>Content for Tab 3</p>
            </div>
          ),
        },
      ]}
    />
  );
}

export const Basic: Story = {
  render: () => <ComponentRenderDefault />,
};
