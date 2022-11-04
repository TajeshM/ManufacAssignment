import React from "react";
import ReactECharts from "echarts-for-react";
import wine_data from "./Wine-Data.json";

const BarChart = () => {
  //declaring arrays for storing MalicAcid list for each class of alcohol
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  //storing the MalicAcid values of respective class in its respective array
  wine_data.forEach((obj) => {
    if (obj.Alcohol === 1) {
      arr1.push(obj["Malic Acid"]);
    }
    if (obj.Alcohol === 2) {
      arr2.push(obj["Malic Acid"]);
    }
    if (obj.Alcohol === 3) {
      arr3.push(obj["Malic Acid"]);
    }
  });
  //calculating average of MalicAcid of each class of alcohol
  var MalicAcid1 = arr1.reduce((a, b) => a + b, 0) / arr1.length;
  var MalicAcid2 = arr2.reduce((a, b) => a + b, 0) / arr2.length;
  var MalicAcid3 = arr3.reduce((a, b) => a + b, 0) / arr3.length;

  var options = {
    tooltip: {
      position: "top",
    },
    xAxis: {
      name: "Alcohol",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: 20,
      },
      nameGap: 35,
      type: "category",
      data: ["Alcohol1", " Alcohol2", "Alcohol3"],
    },
    yAxis: {
      name: "Malic Acid",
      nameLocation: "middle",
      nameTextStyle: {
        fontSize: 18,
      },
      nameGap: 25,
    },
    series: [
      {
        name: "Average of Malic Acid",
        data: [MalicAcid1, MalicAcid2, MalicAcid3],
        type: "bar",
        barWidth: "60%",
        smooth: true,
        label: "intensity",
        color: "#166698",
      },
    ],
  };
  return <ReactECharts option={options} />;
};

export default BarChart;
