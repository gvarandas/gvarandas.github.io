import React from 'react';
import styled from 'styled-components';
import { Link } from '@reach/router';

const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: stretch;
  padding: 20px 40px;

  a {
    margin-right: 20px;
    color: black;
    font-size: 1.25rem;
    font-weight: bold;
    text-decoration: none;

    :visited {
      color: inherit;
    }

    :hover {
      color: darkorange;
    }
  }

  @media (max-width: 380px)  {
    padding: 20px 0;
  }
`;

const HeaderBorder = styled.div`
  width: 300px;
  max-width: 70%;
  border-top: 2px solid darkorange;
  align-self: flex-end;
`;

const Header = () => (
  <>
    <HeaderContainer>
      <Link to="/">HOME</Link>
      <Link to="/blog">BLOG</Link>
    </HeaderContainer>
    <HeaderBorder />
  </>
);

export default Header;