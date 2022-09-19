import React from "react";
import { YEARS } from "../../config";
import { useChartContext } from "../../hooks";
import { FILTER_BY_YEAR } from "../../reducers/actions";

export default function Year() {
  const { dispatch, getChartDataHandler } = useChartContext();

  const selectYearHandler = e => {
    let selectedYear = e.target.value;
    getChartDataHandler(selectedYear);
    dispatch({ type: FILTER_BY_YEAR, payload: selectedYear });
  };

  return (
    <div className="year">
      <select onChange={e => selectYearHandler(e)}>
        {/* <option>Select Year</option> */}
        {YEARS.map((year, index) => (
          <option key={index}>{year}</option>
        ))}
      </select>
    </div>
  );
}
