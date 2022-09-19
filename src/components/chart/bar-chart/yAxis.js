import { useEffect, useRef } from "react";
import * as d3 from "d3";

const YAxis = props => {
  const axis = useRef(null);

  const { scale } = props;

  useEffect(() => {
    d3.select(axis.current).call(d3.axisLeft(scale));
  });

  return <g className="axis y" ref={axis} />;
};

export default YAxis;
