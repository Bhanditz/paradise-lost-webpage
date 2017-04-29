import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import NavButton from './NavButton';

const TopNavWrapper = styled.div`
  margin: 1em 0em;
`;

const renderLink = (item, index, current) => {
  const selected = `/${item.selector}` === current;
  return (
    <Link to={`/${item.selector}`} key={index}>
      <NavButton selected={selected} top={true}>{item.displayName}</NavButton>
    </Link>
  );
};

function TopNav({items, current}) {
  return (
    <TopNavWrapper>
      {items.map((d, i) => renderLink(d, i, current))}
    </TopNavWrapper>
  );
}

export default TopNav;
