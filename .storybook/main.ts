import type { StorybookConfig } from "@storybook/react-vite";

import {} from "../lib/components/button/button.stories";

const config: StorybookConfig = {
  stories: [
    "../lib/components/**/*.stories.tsx",
    "../lib/components/**/*.stories.@(js|jsx|mjs|ts|tsx)",
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
