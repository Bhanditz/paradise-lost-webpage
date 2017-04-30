import React from 'react';
import {range} from 'd3-array';
import {interpolateBlues} from 'd3-scale-chromatic';

const STEP = 0.01;

const renderBar = (d, index, styles) => {
  const barProps = {
    x: styles.width - styles.margin.sides - styles.margin.barHeight,
    y: index * styles.barHeight,
    width: styles.barWidth,
    height: styles.barHeight,
    fill: interpolateBlues(1 - d),
    key: index,
  };

  return <rect {...barProps} />;
};

function ColorAxis({styles}) {
  const bars = range(0, 1, STEP);
  const barStyles = {
    ...styles,
    barHeight: (styles.height - styles.margin.top - styles.margin.bottom) *
      STEP,
  };
  return (
    <g>
      {bars.map((d, i) => renderBar(d, i, barStyles))}
    </g>
  );
}

export default ColorAxis;
