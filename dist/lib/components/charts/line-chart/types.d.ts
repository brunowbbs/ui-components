type ChartData = {
    label: string;
    value1: number;
    value2?: number;
};
export type LineChartProps = {
    height?: number;
    sourceData: ChartData[];
    offset?: number;
    color1?: string;
    color2?: string;
    label1?: string;
    label2?: string;
};
export {};
