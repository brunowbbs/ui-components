import { Chart } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

import { defaults } from 'chart.js/auto';

import { Bar } from 'react-chartjs-2';
import { COLORS } from '../../../../utils';
import { BarChartProps } from './types';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = false;
defaults.plugins.title.align = 'start';
defaults.plugins.title.color = 'black';

Chart.register(ChartDataLabels);

export function BarChart({
  height = 400,
  sourceData = [],
  offset = 4,
  color = COLORS.primary,
  label = 'Total',
}: BarChartProps) {
  if (sourceData?.length < 1) {
    return <h3 className="text-sm ">Informe os dados do Bar chart</h3>;
  }

  return (
    // <Card>
    <div className="flex-1" style={{ height }}>
      <Bar
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label,
              data: sourceData.map((data) => data.value),
              backgroundColor: color,
              borderRadius: 2,
            },
          ],
        }}
        options={{
          scales: {
            x: {
              grid: {
                display: false,
              },
              border: {
                display: false,
              },
              ticks: {
                display: true,
                font: {
                  weight: 700,
                  family: 'Plus Jakarta Sans',
                  size: 10,
                },
              },
            },
            y: {
              ticks: {
                font: {
                  weight: 700,
                  family: 'Plus Jakarta Sans',
                  size: 10,
                },
                // display: false,
              },
              border: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
          },
          plugins: {
            legend: {
              display: false,
            },

            datalabels: {
              display: true,
              color: 'black',
              align: 'end',
              anchor: 'end',
              offset,
              font: {
                family: 'Plus Jakarta Sans',
                size: 10,
                weight: 700,
              },
            },
          },
        }}
      />
    </div>
    // </Card>
  );
}
