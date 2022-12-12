import "./styles.css";

import { Chart } from "react-google-charts";

const data = [
  ["Year wise graph", "sales(in Rs)", "expenses(in Rs)", "profit(in Rs)"],
  ["2016", 1000, 400, 200],
  ["2017", 1100, 600, 250],
  ["2018", 900, 300, 300],
  ["2019", 1200, 1000, 200],
  ["2020", 800, 100, 400],
  ["2021", 1300, 500, 400]
];

export default function App() {
  return (
    <div className="App">
      <h1>Google Charts in React</h1>
      <h2> unit mini projects </h2>

      <Chart
        chartType="Bar"
        data={data}
        width="80%"
        height="400px"
        legendToggle
      />
    </div>
  );
}
