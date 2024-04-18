import { defaults } from 'chart.js/auto';
import { Line } from 'react-chartjs-2';
import { LineChartProps } from './types';
import { COLORS } from '../../../../utils';

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = false;
defaults.plugins.title.align = 'start';
defaults.plugins.title.color = 'black';

export function LineChart({
  height = 400,
  sourceData = [],
  offset = 4,
  color1 = COLORS.primary,
  color2 = COLORS.warning,
  label1 = 'Total1',
  label2 = 'Total2',
}: LineChartProps) {
  return (
    <div className="flex-1" style={{ height }}>
      <Line
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: label1,
              data: sourceData.map((data) => data.value1),
              backgroundColor: color1,
              borderColor: color1,
            },
            {
              label: label2,
              data: sourceData.map((data) => data.value2),
              backgroundColor: color2,
              borderColor: color2,
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
              display: true,
              position: 'bottom',
              labels: {
                font: {
                  weight: 700,
                  family: 'Plus Jakarta Sans',
                  size: 10,
                },
              },
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
  );
}
