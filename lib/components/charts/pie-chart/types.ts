type ChartData = {
  label: string;
  value: number;
};

export type PieChartProps = {
  height?: number;
  sourceData: ChartData[];
  offset?: number;
  borderColors?: string[];
  backgroundColors?: string[];
};
