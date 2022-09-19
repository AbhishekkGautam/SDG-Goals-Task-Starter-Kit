import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./app.css";
import Goal from "./components/controls/goal";
import Year from "./components/controls/year";
import Chart from "./components/chart";
import Map from "./components/map";
import { useChartContext } from "./hooks";

function App() {
  const { state } = useChartContext();

  const navigate = useNavigate();

  useEffect(() => {
    const searchParams = new URLSearchParams({
      goal: state.goal,
      year: state.year,
    });
    const q = searchParams.toString();
    navigate(`/?${q}`);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <div className="side">
        <h1 className="title">SDG Goals data</h1>
        <div className="control">
          <Goal />
          <Year />
        </div>
        <Chart />
      </div>
      <Map />
    </div>
  );
}

export default App;
