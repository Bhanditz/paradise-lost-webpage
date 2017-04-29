import styled from 'styled-components';

const NavButton = styled.button`
  border: 1px solid black;
  margin: 0em 1em;
  font-size: ${props => (props.top ? '2em' : '1em')};
  color: ${props => (props.selected ? 'white' : 'black')};
  background-color: ${props => (props.selected ? 'black' : 'white')};
  -webkit-border-radius: 6;
  -moz-border-radius: 6;
  border-radius: 6px;
  padding: 10px 20px 10px 20px;
  text-decoration: none;
`;

export default NavButton;
