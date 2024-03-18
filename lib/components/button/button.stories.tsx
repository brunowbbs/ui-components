import { Button } from "./index";

export default {
  title: "Componentes/Botao",
  component: Button,
  parameters: {
    layout: "padded",
    docs: {
      description: {
        component: "Componente de botão",
      },
    },
  },
  argTypes: {
    //   title: {
    //     description: "Atributo de título html",
    //     control: { type: "text" },
    //   },
    //   children: { description: "Label do botão" },
    //   isOutlined: {
    //     description: "Label do botão",
    //     type: "boolean",
    //     defaultValue: false,
    //   },
    //   isLink: {
    //     description: "Aparência de link",
    //     type: "boolean",
    //     defaultValue: false,
    //   },
    //   isDisabled: {
    //     description: "Botão desativado",
    //     type: "boolean",
    //     defaultValue: false,
    //   },
    //   isTogglable: {
    //     description: "Botão de alternância",
    //     type: "boolean",
    //     defaultValue: false,
    //   },
    //   isSummary: {
    //     description: "Botão do acordeão",
    //     type: "boolean",
    //     defaultValue: false,
    //   },
    //   isVertical: {
    //     description: "Botão vertical",
    //     type: "boolean",
    //     defaultValue: false,
    //   },
    //   onPress: {
    //     description: "Evento ao pressionar",
    //     action: "button-press",
    //     type: "function",
    //   },
    //   onToggle: {
    //     description: "Evento ao alternar",
    //     action: "button-toggle",
    //     type: "function",
    //   },
    //   variant: {
    //     description: "Variações de cor",
    //     options: [
    //       "danger",
    //       "inverted",
    //       "primary",
    //       "secondary",
    //       "success",
    //       "unset",
    //     ],
    //     control: { type: "select" },
    //     defaultValue: "primary",
    //   },
    //   size: {
    //     options: ["small", "regular", "large"],
    //     control: { type: "select" },
    //     defaultValue: "regular",
    //   },
  },
  args: {
    text: "Button",
  },
};

const Template = (args) => <Button {...args} />;

export const primary = Template.bind({});
Object.assign(primary, {
  args: { variant: "primary" },
});

export const secondary = Template.bind({});
Object.assign(secondary, {
  args: { variant: "secondary" },
});

export const danger = Template.bind({});
Object.assign(danger, {
  args: { variant: "danger" },
});

export const success = Template.bind({});
Object.assign(success, {
  args: { variant: "success" },
});
