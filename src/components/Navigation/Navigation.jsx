import React from 'react';

import { Nav, Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <Nav>
      <Link to="/" end>
        Home
      </Link>
      <Link to="/movies">Movies</Link>
    </Nav>
  );
};
export default Navigation;
