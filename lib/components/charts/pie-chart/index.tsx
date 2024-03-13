import { defaults } from "chart.js/auto";
import { Pie } from "react-chartjs-2"; // Importando o componente Pie
import { COLORS } from "../../../../utils";
import { PieChartProps } from "./types";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

defaults.plugins.title.display = true;
defaults.plugins.title.align = "start";
defaults.plugins.title.color = "black";

const sourcedata3 = [
  {
    label: "Ana",
    value: 32,
  },
  {
    label: "Wesley",
    value: 15,
  },
  {
    label: "Leandro",
    value: 23,
  },
];

export function PieChart({
  sourceData = sourcedata3,
  height = 200,
  offset,
}: PieChartProps) {
  return (
    <div className="w-full" style={{ height }}>
      <Pie
        data={{
          labels: sourceData.map((data) => data.label),
          datasets: [
            {
              label: "Count",
              data: sourceData.map((data) => data.value),
              backgroundColor: [COLORS.primary, COLORS.danger, COLORS.warning],
              borderColor: [COLORS.primary, COLORS.danger, COLORS.warning],
            },
          ],
        }}
        options={{
          plugins: {
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
