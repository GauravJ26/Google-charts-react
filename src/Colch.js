// Column Chart Data page
import Chart from "react-google-charts";

const data = [
  ["Year wise graph", "sales", "expenses", "profit"],
  ["2016", 1000, 400, 200],
  ["2017", 1100, 600, 250],
  ["2018", 900, 300, 300],
  ["2019", 1200, 1000, 200],
  ["2020", 800, 100, 400],
  ["2021", 1300, 500, 400]
];

export default function Colch() {
  return (
    <div>
      <Chart
        chartType="Bar"
        data={data}
        width="80%"
        height="300px"
        legendToggle
      />
    </div>
  );
}
