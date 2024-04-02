import React, { useEffect } from 'react';
import ApexCharts from 'apexcharts';

const AreaChart = ({jdata}) => {
  useEffect(() => {
    
    // if (jdata && jdata.Daily) {
    //   // Extract dates from the Daily array
    //   const dates = jdata.Daily.map(entry => entry.Date);
    //   console.log(dates);
    // } else {
    //   console.error("No daily data found in jdata.");
    // }
    const dates = jdata.Daily.map(entry => entry.Date);
    const dailyHighs = jdata.Daily.map(entry => entry["Daily High"]);
    const dailyLows = jdata.Daily.map(entry => entry["Daily Low"]);
    const dailyHighsNumbers = dailyHighs.map(high => parseFloat(high.replace('¥', '')));
    const dailyLowsNumbers = dailyLows.map(high => parseFloat(high.replace('¥', '')));
    const options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: true,
        },
        toolbar: {
          show: true,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: true,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: true,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
        {
          name: "",
          data: dailyLowsNumbers,
          color: "#1A56DB",
        },
        {
          name: "",
          data: dailyHighsNumbers,
          color: "#c23c3c",
        },
      ],
      xaxis: {
        categories: dates,
        labels: {
          show: true,
        },
        axisBorder: {
          show: true,
        },
        axisTicks: {
          show: true,
        },
      },
      yaxis: {
        show: true,
      },
    };

    const chart = new ApexCharts(document.getElementById("area-chart"), options);
    chart.render();

    // Cleanup function to destroy the chart when the component unmounts
    return () => chart.destroy();
  }, []); // Empty dependency array ensures this effect runs only once when the component mounts

  return <div id="area-chart" />;
};

export default AreaChart;
