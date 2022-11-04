import React from "react";
import BarChart from "./BarChart";
import ScatterPlot from "./ScatterPlot";
import "./App.css";

const App = () => {
  return (
    <div className="content">
      <h1> ScatterPlot of Color intensity Vs Hue </h1>
      <ScatterPlot />
      <h1> Bar Chart of Alcohol Vs Average of MalicAcid </h1>
      <BarChart />
    </div>
  );
};

export default App;
