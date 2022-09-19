import { YEARS } from "../../config";
import { useChartContext, useParamsState } from "../../hooks";
import { FILTER_BY_YEAR } from "../../reducers/actions";

export default function Year() {
  const { state, dispatch, getChartDataHandler } = useChartContext();

  const [, setYearParam] = useParamsState("year", state.year);

  const selectYearHandler = e => {
    let selectedYear = e.target.value;
    getChartDataHandler(selectedYear);
    dispatch({ type: FILTER_BY_YEAR, payload: selectedYear });
  };

  return (
    <div className="year">
      <select
        onChange={e => {
          setYearParam(e.target.value);
          selectYearHandler(e);
        }}
      >
        {/* <option>Select Year</option> */}
        {YEARS.map((year, index) => (
          <option key={index}>{year}</option>
        ))}
      </select>
    </div>
  );
}
