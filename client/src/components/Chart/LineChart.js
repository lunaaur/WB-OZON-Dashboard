import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "chart.js";
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(annotationPlugin);

function LineChart({ chartData, options }) {
  return <Line data={chartData} options={options}/>;
}

export default LineChart;
