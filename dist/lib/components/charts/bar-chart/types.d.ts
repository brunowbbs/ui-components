type ChartData = {
    label: string;
    value: number;
};
export type BarChartProps = {
    height?: number;
    sourceData: ChartData[];
    offset?: number;
    color?: string;
    label?: string;
};
export {};
