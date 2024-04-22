import { Meta, StoryObj } from "@storybook/react";

import { Popover } from ".";
import { useStatePopover } from "./hooks";

const meta: Meta<typeof Popover> = {
  title: "Componentes/Popover",
  component: Popover,
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

type Story = StoryObj<typeof Popover>;

function ComponentRenderDefault() {
  const { state } = useStatePopover();

  return (
    <Popover state={state} childButton="Trigger">
      <>
        <p>children dropdown</p>
        <p>children dropdown</p>
        <button
          onClick={() => {
            console.log("cliquei");
            state.close();
          }}
        >
          children dropdown
        </button>
      </>
    </Popover>
  );
}

export const Basic: Story = {
  render: () => <ComponentRenderDefault />,
};

// export const Dropdown: Story = {
//   args: {
//     state: state,
//     children: (
//       <>
//         <p>children dropdown</p>
//         <p>children dropdown</p>
//         <button
//           onClick={() => {
//             console.log("cliquei");
//           }}
//         >
//           children dropdown
//         </button>
//       </>
//     ),
//     buttonProps: {
//       variant: "unset",
//     },
//     childButton: <Icon src={menuDotsVertical} alt="ícone Dropdown" />,
//     placement: "bottom right",
//   },
// };
