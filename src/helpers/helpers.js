import { UT } from "../config";

export const getFilteredChartData = (chartData, state) => {
  let tempChartData = [...chartData];

  if (state.toggleInput === "STATE") {
    tempChartData = tempChartData.filter(data => !UT.includes(data.area_name));
  }

  if (state.toggleInput === "UT") {
    tempChartData = tempChartData.filter(data => UT.includes(data.area_name));
  }

  return tempChartData;
};
