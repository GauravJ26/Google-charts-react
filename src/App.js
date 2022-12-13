// Unit of multiple charts of react google charts in this app

import "./styles.css";

import Pye from "./Pye";
import Colch from "./Colch";

export default function App() {
  return (
    <div className="App">
      <h1 className>Google Charts in React</h1>
      <h2> unit of mini projects </h2>
      <div>
        <Pye />
        <Colch />
      </div>
    </div>
  );
}
