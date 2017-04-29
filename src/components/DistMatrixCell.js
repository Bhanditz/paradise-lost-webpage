import React from 'react';
import {interpolateBlues} from 'd3-scale-chromatic';

const colorScale = (data, scales) =>
  interpolateBlues(scales.colorNum(data.dist));

function DistMatrixCell({scales, data, styles}) {
  const xStep = Math.abs(scales.x(1) - scales.x(0));
  const yStep = Math.abs(scales.y(1) - scales.y(0));
  const cellProps = {
    x: scales.x(data.pair[0]),
    y: scales.y(data.pair[1]),
    width: xStep,
    height: yStep,
    fill: colorScale(data, scales),
  };

  return <rect {...cellProps} />;
}

export default DistMatrixCell;
