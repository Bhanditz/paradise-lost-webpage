import React from 'react';
import styled from 'styled-components';

const InfoHeader = styled.div`
  font-size: 1em;
  margin: 0.5em;
  padding: 0.5em;
  background-color: black;
  color: white;
  text-align: left;
  border-radius: 5px;
`;

const InfoText = styled.div`
  font-size: 1em;
  padding: 0em 2em 0.5em 3em;
  text-align: left;
  display: ${props => (props.status ? 'block' : 'none')};
`;

const renderText = (str, index) => {
  return <p key={index}>{str}</p>;
};

function InfoBin({content, header, status, updater, type}) {
  // TODO make the analysis hide/show work
  return (
    <div>
      <InfoHeader onClick={() => updater(type, status)}>
        {header}
      </InfoHeader>
      <InfoText status={status}>
        {content.split('\n').map((s, i) => renderText(s, i))}
      </InfoText>
    </div>
  );
}

export default InfoBin;
