import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80px;
  padding: 0 40px;
  background-image: linear-gradient(
    to bottom,
    #0057b8,
    #0057b8 50%,
    #ffd700 50%,
    #ffd700
  );
  box-shadow: var(--boxShadow);
`;
export const Link = styled(NavLink)`
  display: inline-block;
  text-align: center;
  padding: 12px;
  font-weight: 800;
  color: black;
  font-size: 25px;
  &.active {
    color: red;
  }
`;
