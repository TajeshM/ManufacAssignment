import React from "react";
import ReactECharts from "echarts-for-react";
import wine_data from "./Wine-Data.json";

const ScatterPlot = () => {
  var datalist = wine_data.map((obj) => [obj["Color intensity"], obj.Hue]);

  var options = {
    tooltip: {
      position: "top",
    },
    xAxis: {
      name: "Color intensity ",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: 18,
      },
      nameGap: 25,
    },
    yAxis: {
      name: "Hue",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: 18,
      },
      nameGap: 25,
    },
    series: [
      {
        name: "Color intensity , Hue",
        symbolSize: 20,
        encode: { tooltip: [0, 1] },
        data: datalist,
        type: "scatter",
        smooth: true,
        label: "intensity",
        color: "#166698",
      },
    ],
  };

  return <ReactECharts option={options} />;
};

export default ScatterPlot;
