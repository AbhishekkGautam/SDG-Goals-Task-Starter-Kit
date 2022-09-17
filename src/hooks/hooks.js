import { useContext } from "react";
import { ChartDataContext } from "../context/chartDataContext";

export const useChartContext = () => useContext(ChartDataContext);
