import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: [
    "../lib/components/**/*.stories.@(ts|tsx)",
    "../lib/**/**/*.stories.@(ts|tsx)",
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};
export default config;
