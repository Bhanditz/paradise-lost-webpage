import React from 'react';
import {Axis, axisPropsFromTickScale, BOTTOM} from 'react-d3-axis';
import BarCodeLine from './BarCodeLine';
import {scaleLinear} from 'd3-scale';
import {min, max} from 'd3-array';

const BarCodeStyles = {
  strokeWidth: 1,
  stroke: 'steelblue',
};

const backgroundRect = styles => ({
  x: 0,
  y: 0,
  width: styles.width,
  height: styles.height,
  fill: 'rgb(211, 220, 234)',
});

const infinityLine = styles => ({
  x1: styles.width - styles.margin.sides,
  y1: styles.height - styles.margin.top,
  x2: styles.width - styles.margin.sides,
  y2: styles.margin.bottom,
  strokeWidth: 1,
  stroke: 'black',
});

const lifeExtent = data => {
  const left = min(data, d => d.birth);
  const right = max(data, d => d.death);
  return [left, right];
};

const widthScale = (data, styles) => {
  return scaleLinear()
    .domain(lifeExtent(data))
    .range([styles.margin.sides, styles.width - styles.margin.sides]);
};

const heightScale = (data, styles) => {
  return scaleLinear()
    .domain([0, data.length])
    .range([styles.height - styles.margin.top, styles.margin.bottom]);
};

const renderLine = (scales, data, styles, key) => {
  return <BarCodeLine scales={scales} data={data} styles={styles} key={key} />;
};

function BarCode({data, styles}) {
  const scales = {
    x: widthScale(data, styles),
    y: heightScale(data, styles),
  };

  const lineStyles = {
    ...styles,
    ...BarCodeStyles,
  };

  return (
    <g>
      <rect {...backgroundRect(styles)} />
      <line {...infinityLine(styles)} />
      <Axis
        {...axisPropsFromTickScale(scales.x, 10)}
        style={{orient: BOTTOM}}
      />
      {data.map((d, i) => renderLine(scales, d, lineStyles, i))}
    </g>
  );
}

export default BarCode;
