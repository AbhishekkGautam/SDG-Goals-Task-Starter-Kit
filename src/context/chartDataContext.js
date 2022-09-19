import { createContext, useEffect, useReducer } from "react";
import { GOALS_LIST, YEARS } from "../config";
import { chartDataReducer } from "../reducers";
import { ERROR, LOADING, SAVE_CHART_DATA } from "../reducers/actions";
import { getChartDataByYear } from "../services";

const initialState = {
  data: [],
  year: String(YEARS[0]),
  goal: GOALS_LIST[0],
  toggleInput: "STATE",
  isLoading: false,
  error: null,
};

const ChartDataContext = createContext();

const ChartDataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(chartDataReducer, initialState);

  useEffect(() => {
    dispatch({ type: LOADING });
    getChartDataHandler(state.year);
  }, [state.year]);

  const getChartDataHandler = async year => {
    try {
      const response = await getChartDataByYear(year);
      dispatch({ type: SAVE_CHART_DATA, payload: response });
    } catch (error) {
      dispatch({ type: ERROR, payload: error });
    }
  };

  return (
    <ChartDataContext.Provider value={{ state, dispatch, getChartDataHandler }}>
      {children}
    </ChartDataContext.Provider>
  );
};

export { ChartDataContext, ChartDataProvider };
