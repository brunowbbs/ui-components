import { Meta, StoryObj } from "@storybook/react";

import { filter1IconsMaterialUiOutlined } from "@leopsousaa/ui-icons/dist";
import { Popover } from ".";
import { IconLeft, IconRight } from "../iconText";
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
    <Popover state={state} childButton={<>Filtros</>}>
      <>
        <p>children dropdown</p>
        <p>children dropdown</p>
        <button
          onClick={() => {
            state.close();
          }}
        >
          children dropdown
        </button>
      </>
    </Popover>
  );
}

function ComponentRenderWithIconLeft() {
  const { state } = useStatePopover();

  return (
    <Popover
      state={state}
      childButton={
        <>
          <IconLeft
            src={filter1IconsMaterialUiOutlined}
            alt="ícone de filtro"
          />
          Filtros
        </>
      }
    >
      <>
        <p>children dropdown</p>
        <p>children dropdown</p>
        <button
          onClick={() => {
            state.close();
          }}
        >
          children dropdown
        </button>
      </>
    </Popover>
  );
}

function ComponentRenderWithIconRight() {
  const { state } = useStatePopover();

  return (
    <Popover
      state={state}
      childButton={
        <>
          <IconRight
            src={filter1IconsMaterialUiOutlined}
            alt="ícone de filtro"
          />
          Filtros
        </>
      }
    >
      <>
        <p>children dropdown</p>
        <p>children dropdown</p>
        <button
          onClick={() => {
            state.close();
          }}
        >
          children dropdown
        </button>
      </>
    </Popover>
  );
}

function ComponentRenderWithIcon() {
  const { state } = useStatePopover();

  return (
    <Popover
      state={state}
      childButton={
        <>
          <IconRight
            src={filter1IconsMaterialUiOutlined}
            alt="ícone de filtro"
          />
          <IconLeft
            src={filter1IconsMaterialUiOutlined}
            alt="ícone de filtro"
          />
          Filtros
        </>
      }
    >
      <>
        <p>children dropdown</p>
        <p>children dropdown</p>
        <button
          onClick={() => {
            state.close();
          }}
        >
          children dropdown
        </button>
      </>
    </Popover>
  );
}

export const Default: Story = {
  render: () => <ComponentRenderDefault />,
};

export const WithIcon: Story = {
  render: () => <ComponentRenderWithIcon />,
};

export const WithIconLeft: Story = {
  render: () => <ComponentRenderWithIconLeft />,
};

export const WithIconRight: Story = {
  render: () => <ComponentRenderWithIconRight />,
};
