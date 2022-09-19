import * as d3 from "d3";
import XAxis from "./xAxis";
import YAxis from "./yAxis";
import Rect from "./rect";
import { useChartContext } from "../../../hooks";
import React from "react";

const BarChart = props => {
  const { width, height, top, bottom, left, right, data } = props;

  const {
    state: { goal },
  } = useChartContext();

  const getChartDataValue =
    goal === "SDG Index Score"
      ? data?.map(item =>
          item.chartdata?.find(d => d.name === "SDG Index Score")
        )
      : data?.map(item =>
          item.chartdata?.find(d => d.name === goal?.split(":")[0])
        );

  const ticks = data.map((_, idx) => idx);
  const tickLabels = data.map(d => d.area_name);

  const x = d3.scaleBand().range([0, width]).domain(ticks).padding(0.2);

  const y = d3
    .scaleLinear()
    .range([0, height])
    .domain([d3.max(getChartDataValue, d => d.value), 0]);

  return (
    <svg width={width} height={height} style={{ overflow: "visible" }}>
      <XAxis
        scale={x}
        // top={top}
        // bottom={bottom}
        // left={left}
        // right={right}
        tickLabels={tickLabels}
        ticks={ticks}
        data={data}
        height={height}
      />
      <YAxis
        scale={y}
        // top={top}
        // bottom={bottom}
        // left={left}
        // right={right}
      />
      <g>
        {getChartDataValue.map((data, index) => (
          <React.Fragment key={index}>
            {data.value === null ? (
              <text
                transform={`translate(${width / 3}, ${height / 3})`}
                fill="red"
              >
                No data available
              </text>
            ) : (
              <Rect
                key={index}
                idx={index}
                data={data}
                x={x}
                y={y}
                top={top}
                bottom={bottom}
                height={height}
              />
            )}
          </React.Fragment>
        ))}
      </g>
    </svg>
  );
};

export default BarChart;
