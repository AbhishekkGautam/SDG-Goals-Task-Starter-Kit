import React from "react";
import "./index.css";
import BarChart from "./bar-chart";
import { FILTER_BY_TOGGLE } from "../../reducers/actions";
import { useChartContext } from "../../hooks";
import { getFilteredChartData } from "../../helpers";

export default function Chart() {
  const { state, dispatch } = useChartContext();

  const toggleHandler = () => {
    if (state.data) {
      if (state.toggleInput === "STATE") {
        dispatch({ type: FILTER_BY_TOGGLE, payload: "UT" });
      } else {
        dispatch({ type: FILTER_BY_TOGGLE, payload: "STATE" });
      }
    }
  };

  const filteredChartData = getFilteredChartData(state.data, state);

  return (
    <div className="chart">
      <div className="toggle-container">
        <span className={state.toggleInput === "STATE" ? "toggle-active" : ""}>
          States
        </span>
        <input type="checkbox" id="switch" onChange={toggleHandler} />
        <label htmlFor="switch">Toggle</label>
        <span className={state.toggleInput === "UT" ? "toggle-active" : ""}>
          UTs
        </span>
      </div>
      <BarChart data={filteredChartData} width={460} height={300} />
    </div>
  );
}
