import { GOALS_LIST } from "../../config";
import { useChartContext, useParamsState } from "../../hooks";
import { FILTER_BY_GOAL } from "../../reducers/actions";

export default function Goal() {
  const { state, dispatch } = useChartContext();
  const [, setGoalParam] = useParamsState("goal", state.goal);

  return (
    <div className="goal">
      <select
        onChange={e => {
          setGoalParam(e.target.value);
          dispatch({ type: FILTER_BY_GOAL, payload: e.target.value });
        }}
      >
        {/* <option>Select Goal</option> */}
        {GOALS_LIST.map((goal, index) => (
          <option key={index}>{goal}</option>
        ))}
      </select>
    </div>
  );
}
