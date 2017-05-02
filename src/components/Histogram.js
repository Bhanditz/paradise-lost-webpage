import React from 'react';
import {max, extent, histogram} from 'd3-array';
import {scaleLinear} from 'd3-scale';
import {Axis, axisPropsFromTickScale, RIGHT, BOTTOM} from 'react-d3-axis';
import HistBar from './HistBar';

const rectStyles = {
  fill: 'steelblue',
};

const distScale = (data, styles) => {
  return scaleLinear()
    .domain(extent(data))
    .range([styles.margin.sides, styles.width - styles.margin.sides]);
};

const binData = (data, bins, scale) => {
  return histogram().domain(scale.domain()).thresholds(scale.ticks(bins))(data);
};

const renderRect = (data, index, styles, scales) => {
  return (
    <HistBar
      scales={scales}
      data={data}
      key={index}
      index={index}
      styles={styles}
    />
  );
};

function Histogram({data, styles}) {
  const distData = data.map(d => d.dist);

  const sc = distScale(distData, styles);
  const bins = binData(distData, 20, sc).map(d => d.length / distData.length);
  // const freqBins = bins.map(d => d.length / bins.length);

  const graphStyles = {
    ...styles,
    ...rectStyles,
  };
  const barScales = {
    x: scaleLinear()
      .domain([0, bins.length])
      .range([styles.margin.sides, styles.width - styles.margin.sides]),
    y: scaleLinear()
      .domain([0, max(bins)])
      .range([styles.height - styles.margin.top, styles.margin.bottom]),
  };

  return (
    <g>
      {bins.map((d, i) => renderRect(d, i, graphStyles, barScales))}
      <Axis
        {...axisPropsFromTickScale(barScales.y, 10)}
        style={{orient: RIGHT}}
      />
      <Axis
        {...axisPropsFromTickScale(barScales.x, 10)}
        style={{orient: BOTTOM}}
      />
    </g>
  );
}

export default Histogram;
