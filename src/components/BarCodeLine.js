import React from 'react';

function BarCodeLine({scales, data, styles}) {
  const lineProps = {
    x1: scales.x(data.birth),
    y1: scales.y(data.gen),
    x2: data.death === -1 ? styles.width : scales.x(data.death),
    y2: scales.y(data.gen),
    strokeWidth: styles.strokeWidth,
    stroke: styles.stroke,
  };

  return <line {...lineProps} />;
}

export default BarCodeLine;
