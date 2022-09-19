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
        States
        <input type="checkbox" id="switch" onChange={toggleHandler} />
        <label htmlFor="switch">Toggle</label>
        <span>UT</span>
      </div>
      <BarChart
        data={filteredChartData}
        width={450}
        height={300}
        // top={20}
        // bottom={80}
        // left={30}
        // right={0}
      />
    </div>
  );
}
