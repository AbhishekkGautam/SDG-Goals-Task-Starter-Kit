import { useEffect, useRef } from "react";
import * as d3 from "d3";

const XAxis = props => {
  const axis = useRef(null);

  const { height, scale, ticks, tickLabels } = props;

  useEffect(() => {
    d3.select(axis.current)
      .call(
        d3
          .axisBottom(scale)
          .tickValues(ticks)
          .tickFormat((_, i) => tickLabels[i])
      )
      .selectAll("text")
      .style("text-anchor", "end")
      .attr("dx", "-.8em")
      .attr("dy", "-.40em")
      .attr("transform", "rotate(-65)");
  });

  return (
    <g className="axis x" ref={axis} transform={`translate(0, ${height})`} />
  );
};

export default XAxis;
