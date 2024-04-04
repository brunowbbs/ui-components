export type Step = {
  name: string;
  component: JSX.Element;
  icon: JSX.Element;
};

export type WizardProps = {
  steps: Step[];
};
