import React from 'react';
import {extent} from 'd3-array';
import {scaleLinear} from 'd3-scale';
import DistMatrixCell from './DistMatrixCell';
// import ColorAxis from './ColorAxis';

// const barStyles = {
//   barWidth: 40,
// };

const getScales = (data, styles) => {
  let min, max;
  [min, max] = extent(data, d => d.pair[0]);
  const scaleSetup = scaleLinear().domain([min - 1, max + 1]);
  return {
    x: scaleSetup.range([
      styles.margin.sides,
      styles.width - styles.margin.sides,
    ]),
    y: scaleSetup.range([
      styles.height - styles.margin.top,
      styles.margin.bottom,
    ]),
    colorNum: scaleLinear().domain(extent(data, d => d.dist)),
  };
};

const renderCell = (scales, data, styles, key) => {
  return (
    <DistMatrixCell scales={scales} data={data} styles={styles} key={key} />
  );
};

function DistMatrix({data, styles}) {
  const scales = getScales(data, styles);

  const cellStyles = {
    ...styles,
  };
  return (
    <g>
      {data.map((d, i) => renderCell(scales, d, cellStyles, i))}
      {/*  <ColorAxis styles={cellStyles} /> */}
    </g>
  );
}

export default DistMatrix;
