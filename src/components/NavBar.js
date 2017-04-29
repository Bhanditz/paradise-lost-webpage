import React from 'react';
import styled from 'styled-components';

const NavWrapper = styled.div`

  display: flex;
  margin: 1em 0em;

`;

const NavButton = styled.button`
  border: 1px solid black;
  margin: 0em 1em;
  font-size: 1em;
  color: ${props => (props.selected ? 'white' : 'black')};
  background-color: ${props => (props.selected ? 'black' : 'white')};
  -webkit-border-radius: 6;
  -moz-border-radius: 6;
  border-radius: 6px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;

const renderNavBox = (data, navSelector, navFcn, selectQuery, index) => {
  const selectBool = data.selector === selectQuery;
  return (
    <NavButton
      key={index}
      onClick={() => navFcn(navSelector, data.selector)}
      selected={selectBool}
    >
      {data.displayName}
    </NavButton>
  );
};

function NavBar({identifier, items, navSelector, navFcn, selectQuery}) {
  return (
    <NavWrapper>
      <h2 className={'label'}>{identifier}</h2>
      {items.map((d, i) =>
        renderNavBox(d, navSelector, navFcn, selectQuery, i)
      )}
    </NavWrapper>
  );
}

export default NavBar;
