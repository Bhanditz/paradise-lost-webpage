import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import NavButton from './NavButton';

const TopNavWrapper = styled.div`
  text-align: center;
  margin: 4em;
`;

const renderLink = (item, index, current) => {
  const selected = `/${item.selector}` === current;
  // Highlight "Intro" box on start
  if (item.selector === 'introduction' && current === '/') {
    return (
      <Link to={`/${item.selector}`} key={index}>
        <NavButton selected={true} top={true}>{item.displayName}</NavButton>
      </Link>
    );
  } else {
    return (
      <Link to={`/${item.selector}`} key={index}>
        <NavButton selected={selected} top={true}>{item.displayName}</NavButton>
      </Link>
    );
  }
};

function TopNav({items, current}) {
  return (
    <TopNavWrapper>
      {items.map((d, i) => renderLink(d, i, current))}
    </TopNavWrapper>
  );
}

export default TopNav;
