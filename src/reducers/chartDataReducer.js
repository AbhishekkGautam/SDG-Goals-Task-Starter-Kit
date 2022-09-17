import { ERROR, SAVE_CHART_DATA, LOADING } from "./actions";

export const chartDataReducer = (state, { type, payload }) => {
  switch (type) {
    case LOADING:
      return { ...state, isLoading: true };
    case ERROR:
      return { ...state, isLoading: false, error: payload };
    case SAVE_CHART_DATA:
      return { ...state, isLoading: false, data: payload };
    default:
      return state;
  }
};
