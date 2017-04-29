import React from 'react';

function PersCircle({scales, data, styles}) {
  const circProps = {
    cx: scales.x(data.birth),
    cy: data.death === -1 ? 0 : scales.y(data.death),
    r: styles.radius,
    fill: styles.fill,
  };
  return <circle {...circProps} />;
}

export default PersCircle;
