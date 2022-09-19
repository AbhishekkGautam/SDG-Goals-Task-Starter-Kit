import React from "react";
import { GOALS_LIST } from "../../config";
import { useChartContext } from "../../hooks";
import { FILTER_BY_GOAL } from "../../reducers/actions";

export default function Goal() {
  const { dispatch } = useChartContext();

  return (
    <div className="goal">
      <select
        onChange={e =>
          dispatch({ type: FILTER_BY_GOAL, payload: e.target.value })
        }
      >
        {/* <option>Select Goal</option> */}
        {GOALS_LIST.map((goal, index) => (
          <option key={index}>{goal}</option>
        ))}
      </select>
    </div>
  );
}
