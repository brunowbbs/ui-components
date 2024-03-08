import { defaults } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { COLORS } from "../../../../utils";
import { DougnutChartProps } from "./types";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

const sourcedata = [
  {
    label: "Marcela",
    value: 32,
  },
  {
    label: "Wesley",
    value: 45,
  },
  {
    label: "Leandro",
    value: 23,
  },
];

export function DougnutChart({
  sourceData = sourcedata,
  height = 200,
  offset,
}: DougnutChartProps) {
  return (
    <div className="w-full" style={{ height }}>
      <Doughnut
        data={{
          labels: sourceData.map((data) => data.label), // Corrigindo aqui
          datasets: [
            {
              label: "Count",
              data: sourceData.map((data) => data.value), // Corrigindo aqui
              backgroundColor: [COLORS.primary, COLORS.danger, COLORS.warning],
              borderColor: [COLORS.primary, COLORS.danger, COLORS.warning],
            },
          ],
        }}
        options={{
          plugins: {
            // Movendo a configuração da legenda para dentro de plugins
            legend: {
              display: true,
              position: "bottom",
              labels: {
                font: {
                  weight: 700,
                  family: "Plus Jakarta Sans",
                  size: 10,
                },
              },
            },
            datalabels: {
              display: true,
              color: "white",
              offset,
              font: {
                family: "Plus Jakarta Sans",
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
