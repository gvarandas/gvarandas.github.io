import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: stretch;
  padding: 20px 40px;

  @media (max-width: 768px) {
    padding: 20px 0;
  }
`;

const StyledLink = styled(NavLink)`
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

  &.active {
    color: darkorange;
  }
`;

const HeaderBorder = styled.div`
  width: 300px;
  max-width: 70%;
  border-top: 2px solid darkorange;
  align-self: flex-end;
`;

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <StyledLink exact to="/">
          HOME
        </StyledLink>
        <StyledLink to="/blog">BLOG</StyledLink>
      </HeaderContainer>
      <HeaderBorder />
    </>
  );
};

export default Header;
