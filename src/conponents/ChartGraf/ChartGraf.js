import React from "react";
import './ChartGraf.css'
import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

function ChartGraf (props) {

  const pieChartData = {
    labels: [],
    datasets: [{
        data: [],
        label: "price",
        // backgroundColor: ["#2FDE00", "#00A6B4", "#ff6600"],
        // hoverBackgroundColor: ["#175000", "#003350", "#993d00"],
        hoverOffset: 0
    }]
  };

  const {dataProps} = props;

  for (let i in dataProps) {
    pieChartData.labels.push(dataProps[i].title);
    pieChartData.datasets[0].data.push(dataProps[i].price);
  }


  const pieChart = (
    <Chart
      type="doughnut"
      width={1}
      height={1}
      options={{
        plugins: {
          title: {
            display: true,
            text: "Prices of products from the table",
            fontSize: 7,
            position: "right"
          },
          legend: {
            display: true, //Is the legend shown?
            position: "left", //Position of the legend.
            labels: {
              font: {size: 10},
              boxWidth: 10,
            }, 
          }
        }
        
      }}
      data={pieChartData}
    />
  );
  return pieChart;
};
export default ChartGraf;