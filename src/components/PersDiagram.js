import React from 'react';
import {Axis, axisPropsFromTickScale, BOTTOM, RIGHT} from 'react-d3-axis';
import {extent} from 'd3-array';
import {scaleLinear} from 'd3-scale';
import PersCircle from './PersCircle';

const PersDiagramStyles = {
  fill: 'steelblue',
  radius: 5,
};

const backgroundRect = styles => ({
  x: 0,
  y: 0,
  width: styles.width - styles.margin.sides,
  height: styles.height,
  fill: 'rgb(211, 220, 234)',
});

const widthScale = (data, styles) => {
  return scaleLinear()
    .domain(extent(data, d => +d.birth))
    .range([styles.margin.sides, styles.width - styles.margin.sides]);
};

const heightExtent = data => {
  const nonPersistent = data.filter(d => +d.death !== -1);
  return extent(nonPersistent, d => +d.death);
};

const heightScale = (data, styles) => {
  return scaleLinear()
    .domain(heightExtent(data))
    .range([styles.height - styles.margin.top, styles.margin.bottom]);
};

const renderCirc = (scales, d, circStyles, key) => {
  return <PersCircle scales={scales} data={d} styles={circStyles} key={key} />;
};

function PersDiagram({data, styles}) {
  const scales = {
    x: widthScale(data, styles),
    y: heightScale(data, styles),
  };

  const circStyles = {
    ...styles,
    ...PersDiagramStyles,
  };

  return (
    <g>
      <rect {...backgroundRect(styles)} />
      {data.map((d, i) => renderCirc(scales, d, circStyles, i))}
      <Axis
        {...axisPropsFromTickScale(scales.x, 10)}
        style={{orient: BOTTOM}}
      />
      <Axis {...axisPropsFromTickScale(scales.y, 10)} style={{orient: RIGHT}} />
      <line
        x1={styles.margin.sides}
        y1={styles.height - styles.margin.bottom}
        x2={styles.width - styles.margin.sides}
        y2={styles.margin.top}
        stroke={'grey'}
        strokeWidth={1}
      />
    </g>
  );
}

export default PersDiagram;
