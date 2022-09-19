import {
  ERROR,
  SAVE_CHART_DATA,
  LOADING,
  FILTER_BY_GOAL,
  FILTER_BY_YEAR,
  FILTER_BY_TOGGLE,
} from "./actions";

export const chartDataReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, isLoading: true };
    case ERROR:
      return { ...state, isLoading: false, error: payload };
    case SAVE_CHART_DATA:
      return { ...state, isLoading: false, data: payload };
    case FILTER_BY_GOAL:
      return { ...state, goal: payload };
    case FILTER_BY_YEAR:
      return { ...state, year: payload };
    case FILTER_BY_TOGGLE:
      return { ...state, toggleInput: payload };
    default:
      return state;
  }
};
