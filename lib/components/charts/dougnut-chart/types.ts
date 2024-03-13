type ChartData = {
  label: string;
  value: number;
};

export type DougnutChartProps = {
  height?: number;
  sourceData: ChartData[];
  offset?: number;
};
