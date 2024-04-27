import { Meta, StoryObj } from "@storybook/react";

import { Popover } from ".";
import { filter } from "../../assets";
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
  argTypes: {
    // placement: {
    //   description: "Variações",
    //   // options: ["danger", "success", "primary", "secondary", "warning"],
    //   control: { type: "select" },
    // },
  },
};

export default meta;

type Story = StoryObj<typeof Popover>;

function ComponentRenderDefault() {
  const { state } = useStatePopover();

  return (
    <Popover state={state} placement="bottom start" childButton={<>Filtros</>}>
      <div>
        <p>children dropdown</p>
        <p>children dropdown</p>
        <button
          onClick={() => {
            state.close();
          }}
        >
          children dropdown
        </button>
      </div>
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
          <IconLeft src={filter} alt="ícone de filtro" />
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
          <IconRight src={filter} alt="ícone de filtro" />
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
      buttonProps={{ variant: "unset" }}
      childButton={
        <>
          <IconRight src={filter} alt="ícone de filtro" />
          <IconLeft src={filter} alt="ícone de filtro" />
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

function ComponentRenderOnlyIcon() {
  const { state } = useStatePopover();

  return (
    <Popover
      state={state}
      buttonProps={{ variant: "unset" }}
      childButton={<IconRight src={filter} alt="ícone de filtro" />}
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

export const OnlyIcon: Story = {
  render: () => <ComponentRenderOnlyIcon />,
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
