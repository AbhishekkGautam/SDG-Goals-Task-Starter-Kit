import * as d3 from "d3";
const colors = d3.scaleOrdinal(d3.schemeCategory10);
const format = d3.format(".0f");

const Rect = props => {
  const { height, top, bottom, x, y, data, idx } = props;

  return (
    <g transform={`translate(${x(idx)}, ${y(data?.value)})`}>
      <rect
        width={x.bandwidth()}
        height={height - y(data?.value)}
        fill={colors(idx)}
      />
      <text
        transform={`translate(${x.bandwidth() / 2}, ${-3})`}
        textAnchor="middle"
        alignmentBaseline="baseline"
        fill="grey"
        fontSize="10"
      >
        {format(data?.value)}
      </text>
    </g>
  );
};

export default Rect;
