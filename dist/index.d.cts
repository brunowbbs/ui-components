import * as react_jsx_runtime from 'react/jsx-runtime';
import * as react from 'react';
import react__default, { ReactElement, PropsWithChildren, ReactSVG, HTMLInputTypeAttribute, ReactNode, HtmlHTMLAttributes } from 'react';
import * as lib from 'lib';
import * as react_aria from 'react-aria';
import { Key } from 'react-aria';
import * as react_stately from 'react-stately';

declare const arrowLeft: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const attendance: {
    tag: string;
    props: {
        xmlns: string;
        fill: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            fill: string;
            fillRule: string;
            d: string;
            clipRule: string;
        };
    }[];
};

declare const backChevron: {
    tag: string;
    props: {
        xmlns: string;
        fill: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            fill: string;
            fillRule: string;
            d: string;
            clipRule: string;
        };
    }[];
};

declare const camera: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const chevronRight: {
    tag: string;
    props: {
        xmlns: string;
        fill: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            fill: string;
            fillRule: string;
            d: string;
            clipRule: string;
        };
    }[];
};

declare const crossCircle: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const cross: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const edit: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const emoticon: {
    tag: string;
    props: {
        xmlns: string;
        fill: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            fill: string;
            fillRule: string;
            d: string;
            clipRule: string;
        };
    }[];
};

declare const handHoldingSeeding: {
    tag: string;
    props: {
        xmlns: string;
        'data-name': string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const hiking: {
    tag: string;
    props: {
        xmlns: string;
        'data-name': string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const home: {
    tag: string;
    props: {
        xmlns: string;
        xmlSpace: string;
        x: string;
        y: string;
        enableBackground: string;
        version: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const interrogation: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: ({
        tag: string;
        props: {
            d: string;
            width?: undefined;
            height?: undefined;
            x?: undefined;
            y?: undefined;
            rx?: undefined;
        };
    } | {
        tag: string;
        props: {
            width: string;
            height: string;
            x: string;
            y: string;
            rx: string;
            d?: undefined;
        };
    })[];
};

declare const marker: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const marker2: {
    tag: string;
    props: {
        xmlns: string;
        'data-name': string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const menuDotsVertical: {
    tag: string;
    props: {
        xmlns: string;
        'data-name': string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

declare const plus: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
            'data-name': string;
        };
    }[];
};

declare const search: {
    tag: string;
    props: {
        xmlns: string;
        fill: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            fill: string;
            fillRule: string;
            d: string;
            clipRule: string;
        };
    }[];
};

declare const share: {
    tag: string;
    props: {
        xmlns: string;
        fill: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            fill: string;
            fillRule: string;
            d: string;
            clipRule: string;
        };
    }[];
};

declare const userFill: {
    tag: string;
    props: {
        xmlns: string;
        fill: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            fill: string;
            d: string;
        };
    }[];
};

declare const user: {
    tag: string;
    props: {
        xmlns: string;
        viewBox: string;
    };
    children: {
        tag: string;
        props: {
            d: string;
        };
    }[];
};

type AlertOptions = {
    title: string;
    message: string;
    type?: 'success' | 'warning' | 'error';
    onAction?: () => void;
    textButton?: string;
};

declare const showAlert: ({ type, message, title, onAction, textButton, }: AlertOptions) => void;

type Colors = 'danger' | 'success' | 'primary' | 'secondary' | 'warning';
type ThemeVariant = 'danger' | 'success' | 'primary' | 'secondary' | 'warning' | 'unset';
type ThemeSize = 'lg' | 'md' | 'sm' | 'xl' | 'xs';

type ButtonProps = {
    variant?: Colors;
    text?: string;
    outline?: boolean;
    isLoading?: boolean;
    disabled?: boolean;
    size?: 'sm' | 'md' | 'lg';
    link?: boolean;
    iconRight?: ReactElement;
    iconLeft?: ReactElement;
    width?: number;
    onClick?: () => void;
    className?: string;
    type?: 'submit' | 'reset' | 'button';
};

declare function Button(props: ButtonProps): react_jsx_runtime.JSX.Element;

declare const ButtonV2: react.ForwardRefExoticComponent<react_aria.AriaButtonProps<"button"> & {
    isLink?: boolean | undefined;
    isVertical?: boolean | undefined;
    isOutlined?: boolean | undefined;
    isSummary?: boolean | undefined;
    variant?: lib.ThemeVariant | undefined;
    title?: string | undefined;
    size?: lib.ThemeSize | undefined;
    isLoading?: boolean | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<HTMLButtonElement>>;

type CardProps = PropsWithChildren;

declare function Card({ children }: CardProps): react_jsx_runtime.JSX.Element;

type ChartData$3 = {
    label: string;
    value: number;
};
type BarChartProps = {
    height?: number;
    sourceData: ChartData$3[];
    offset?: number;
    color?: string;
    label?: string;
};

declare function BarChart({ height, sourceData, offset, color, label, }: BarChartProps): react_jsx_runtime.JSX.Element;

type ChartData$2 = {
    label: string;
    value: number;
};
type DougnutChartProps = {
    height?: number;
    sourceData: ChartData$2[];
    offset?: number;
};

declare function DougnutChart({ sourceData, height, offset, }: DougnutChartProps): react_jsx_runtime.JSX.Element;

type ChartData$1 = {
    label: string;
    value1: number;
    value2?: number;
};
type LineChartProps = {
    height?: number;
    sourceData: ChartData$1[];
    offset?: number;
    color1?: string;
    color2?: string;
    label1?: string;
    label2?: string;
};

declare function LineChart({ height, sourceData, offset, color1, color2, label1, label2, }: LineChartProps): react_jsx_runtime.JSX.Element;

type ChartData = {
    label: string;
    value: number;
};
type PieChartProps = {
    height?: number;
    sourceData: ChartData[];
    offset?: number;
    borderColors?: string[];
    backgroundColors?: string[];
};

declare function PieChart({ sourceData, height, offset, backgroundColors, borderColors, }: PieChartProps): react_jsx_runtime.JSX.Element;

type Props$1 = {
    className?: react__default.HTMLAttributes<HTMLDivElement>['className'];
    label: string;
    onChangeValue: (value: boolean) => void;
    error?: string;
    value?: boolean;
    disabled?: boolean;
};

declare function Checkbox({ label, onChangeValue, error, value, disabled, }: Props$1): react_jsx_runtime.JSX.Element;

type Vector = {
    children?: Vector[];
    tag?: string | keyof ReactSVG;
    props?: Record<string, number | string | undefined>;
};
type SvgProps = {
    alt: string;
    src: Vector;
    color?: string;
    width?: string;
    height?: string;
    className?: string;
    isCurrentColor?: boolean;
    clipPathId?: string;
};

declare const Icon: react.ForwardRefExoticComponent<SvgProps & {
    className?: string | undefined;
    size?: "1.5x" | "1x" | "2x" | "3x" | "4x" | undefined;
} & react.RefAttributes<SVGSVGElement>>;

type TextSize = '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | 'lg' | 'md' | 'sm' | 'xl' | 'xs';
type TextTags = 'a' | 'blockquote' | 'caption' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'label' | 'li' | 'mark' | 'p' | 'span' | 'strong';
type TextElement = HTMLElementTagNameMap[TextTags];

type IconProps = SvgProps & {
    className?: string;
    size?: '1.5x' | '1x' | '2x' | '3x' | '4x';
};

declare const IconText: react.ForwardRefExoticComponent<{
    as?: TextTags | undefined;
    size?: TextSize | undefined;
    className?: string | undefined;
    variant?: lib.ThemeVariant | undefined;
    mode?: "unset" | "block" | undefined;
} & {
    children?: react.ReactNode;
} & {
    isVertical?: boolean | undefined;
} & react.RefAttributes<TextElement>>;
declare const IconLeft: (props: IconProps) => react_jsx_runtime.JSX.Element;
declare const IconRight: (props: IconProps) => react_jsx_runtime.JSX.Element;

type InputProps$1 = {
    value: string;
    width?: number;
    label: string;
    isPassword?: boolean;
    onChangeValue: (value: string | number) => void;
    error?: string;
    placeholder?: string;
    type?: HTMLInputTypeAttribute;
    disabled?: boolean;
};

declare function Input(props: InputProps$1): react_jsx_runtime.JSX.Element;

type InputProps = {
    width?: number;
    label: string;
    type?: 'money' | 'phone' | 'cpf' | 'cnpj' | 'cep';
    onChangeValue: (value: string) => void;
    error?: string;
    placeholder?: string;
    value?: string;
    disabled?: boolean;
};

declare function InputMask(props: InputProps): react_jsx_runtime.JSX.Element;

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    maxWidth?: number;
} & PropsWithChildren;
declare function Modal({ isOpen, onClose, children, maxWidth, }: ModalProps): react_jsx_runtime.JSX.Element;

interface PaginationProps {
    totalPages: number;
    selectedPage: number;
    handleSelectPage: (pageNumber: number) => void;
}

declare function Pagination({ totalPages, selectedPage, handleSelectPage, }: PaginationProps): react_jsx_runtime.JSX.Element;

type Props = {
    left?: number;
    button: ReactNode;
    width?: number;
    isOpen: boolean;
    onClose: () => void;
    onOpen: () => void;
} & PropsWithChildren;

declare function Popover({ left, button, children, width, isOpen, onOpen, onClose, }: Props): react_jsx_runtime.JSX.Element;

type Option = {
    label: string;
    value: string | number;
};
type RadioButtonProps = {
    label: string;
    value: string | number;
    checked: boolean;
    onChangeValue: () => void;
    error?: string;
    disabled?: boolean;
};
type RadioButtonGroupProps = {
    value: string | number;
    label: string;
    options: Option[];
    onChangeValue: (value: string | number) => void;
    error?: string;
    disabled?: boolean;
};

declare function RadioButtonGroup({ options, onChangeValue, label, error, value, disabled, }: RadioButtonGroupProps): react_jsx_runtime.JSX.Element;
declare function RadioButton({ label, value, checked, onChangeValue, error, disabled, }: RadioButtonProps): react_jsx_runtime.JSX.Element;

type RichTextProps = {
    onChangeValue: (value: string) => void;
    error?: string;
    value: string;
    label: string;
    disabled?: boolean;
};

declare function RichText({ onChangeValue, error, value, label, disabled, }: RichTextProps): react_jsx_runtime.JSX.Element;

type SelectProps = {
    label: string;
    placeholder: string;
    options: {
        label: string;
        value: string | number;
    }[];
    disabled?: boolean;
    isMulti?: boolean;
    width?: number;
    onChangeValue: (selectedOption: {
        label: string;
        value: string;
    }) => void;
    value: string;
    error?: string;
};

declare function Select({ label, options, placeholder, disabled, isMulti, width, value, onChangeValue, error, }: SelectProps): react_jsx_runtime.JSX.Element;

declare function Spinner({ color, size, }: {
    color?: string;
    size?: number;
}): react_jsx_runtime.JSX.Element;

declare const Svg: react.ForwardRefExoticComponent<SvgProps & react.RefAttributes<SVGSVGElement>>;

type TableProps = {
    columns: Array<ItemsTypes>;
    rows: Array<RowTypes>;
    mode?: 'multiple' | 'none' | 'single';
    disabled?: Array<string>;
    onRowAction?: (key: Key) => void;
};
type RowTypes = {
    key: string;
    items: Array<ItemsTypes>;
};
type ItemsTypes = {
    elem: string | JSX.Element | number;
    key: string;
};

declare const CustomTable: react.ForwardRefExoticComponent<react_aria.AriaTableProps<object> & react_stately.TableStateProps<object> & {
    className?: string | undefined;
} & react.RefAttributes<HtmlHTMLAttributes<HTMLTableElement>>>;
declare function Table({ columns, rows, mode, disabled, onRowAction, }: TableProps): react_jsx_runtime.JSX.Element;

type TabProps = {
    tabs: {
        title: string;
        content: ReactElement;
    }[];
};

declare function Tabs({ tabs }: TabProps): react_jsx_runtime.JSX.Element;

declare const Text: react.ForwardRefExoticComponent<{
    as?: TextTags | undefined;
    size?: TextSize | undefined;
    className?: string | undefined;
    variant?: lib.ThemeVariant | undefined;
    mode?: "unset" | "block" | undefined;
} & {
    children?: react.ReactNode;
} & react.RefAttributes<TextElement>>;

declare const showToast: {
    error: (message: string) => void;
    success: (message: string) => void;
    warning: (message: string) => void;
};

type Step = {
    name: string;
    component: JSX.Element;
    icon: JSX.Element;
};
type WizardProps = {
    steps: Step[];
};

declare function Wizard({ steps }: WizardProps): react_jsx_runtime.JSX.Element;

type PopoverProfileProps = {
    userLoggedData: {
        name: string;
        description: string;
        avatar?: string;
    };
    menuItems?: {
        title: string;
        icon: React.ReactElement;
        action: () => void;
    }[];
    logoutAction: () => void;
};

type MenuItem = {
    group_name: string;
    items: {
        icon: React.ReactElement;
        title: string;
        action: () => void;
        dropdown?: {
            title: string;
            action: () => void;
        }[];
    }[];
};
type DashboardLayoutType$1 = PropsWithChildren & {
    startSidebarOpened?: boolean;
    menuItems: MenuItem[];
    popoverProfile: PopoverProfileProps;
};

declare function DashboardLayout({ children, menuItems, popoverProfile, startSidebarOpened, }: DashboardLayoutType$1): react_jsx_runtime.JSX.Element;

type DashboardLayoutType = PropsWithChildren;

declare function ProviderUiComponents({ children }: DashboardLayoutType): react_jsx_runtime.JSX.Element;

declare function mountDataTable(dataColumns: Array<string | number | JSX.Element>, dataRows: Array<Array<string | number | JSX.Element>>): {
    columns: {
        key: string;
        elem: string | number | JSX.Element;
    }[];
    rows: RowTypes[];
};

export { BarChart, Button, ButtonV2, Card, Checkbox, type Colors, CustomTable, DashboardLayout, DougnutChart, Icon, IconLeft, IconRight, IconText, Input, InputMask, LineChart, Modal, Pagination, PieChart, Popover, ProviderUiComponents, RadioButton, RadioButtonGroup, RichText, Select, Spinner, Svg, Table, Tabs, Text, type ThemeSize, type ThemeVariant, Wizard, arrowLeft, attendance, backChevron, camera, chevronRight, cross, crossCircle, edit, emoticon, handHoldingSeeding, hiking, home, interrogation, marker, marker2, menuDotsVertical, mountDataTable, plus, search, share, showAlert, showToast, user, userFill };
