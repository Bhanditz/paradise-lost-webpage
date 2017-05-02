import React from 'react';

function HistBar({scales, data, styles, index}) {
  const rectProps = {
    x: scales.x(index),
    y: scales.y(data),
    width: Math.abs(scales.x(1) - scales.x(0)),
    height: styles.height - scales.y(data),
    fill: styles.fill,
  };

  return <rect {...rectProps} />;
}

export default HistBar;
