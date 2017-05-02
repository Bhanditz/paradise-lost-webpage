import React from 'react';
import styled from 'styled-components';
import NavButton from './NavButton';

const NavWrapper = styled.div`
  display: flex;
  margin: 1em 0em;

  .label {
    width: 20%;
    text-align: center;
  }

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
