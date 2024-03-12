import React from "react";
export type Props = {
    className?: React.HTMLAttributes<HTMLDivElement>["className"];
    label: string;
    onChange: (value: boolean) => void;
    error?: string;
    value?: boolean;
};
