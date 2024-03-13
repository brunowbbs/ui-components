/// <reference types="react" />
interface Step {
    name: string;
    component: JSX.Element;
    icon: JSX.Element;
}
interface WizardProps {
    steps: Step[];
}
export declare function Wizard({ steps }: WizardProps): import("react/jsx-runtime").JSX.Element;
export {};
