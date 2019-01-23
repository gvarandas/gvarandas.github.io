import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: stretch;
  padding: 20px 40px;

  a {
    color: black;
    margin-right: 20px;
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

  @media (max-width: 768px)  {
    padding: 20px 0;
  }
`;

const HeaderBorder = styled.div`
  width: 300px;
  max-width: 70%;
  border-top: 2px solid darkorange;
  align-self: flex-end;
`;

const Header = ({ activeRoute }) => {
  console.log('active', String(activeRoute === '/'));
  return (
    <>
      <HeaderContainer>
        <Link to="/">HOME</Link>
        <Link to="/blog">BLOG</Link>
      </HeaderContainer>
      <HeaderBorder />
    </>
  );
}

export default Header;