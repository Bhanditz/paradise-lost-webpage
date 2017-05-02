import React from 'react';

const styles = {
  x: 200,
  y: 150,
  textAnchor: 'middle',
};

const GraphError = () => (
  <text {...styles}>
    Too much data to render...
  </text>
);

export default GraphError;
