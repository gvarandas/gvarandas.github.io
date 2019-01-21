import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-self: stretch;
  padding: 20px 40px;

  span {
    margin-right: 20px;

    a {
      font-weight: bold;
      text-decoration: none;

      :visited {
        color: inherit;
      }

      :hover {
        color: darkorange;
      }
    }
  }
`;

const Header = () => (
  <HeaderContainer>
    <span>
      <a href="/">HOME</a>
    </span>
    <span>
      <a href="#about">ABOUT</a>
    </span>
    <span>
      <a href="#contact">CONTACT</a>
    </span>
  </HeaderContainer>
);

export default Header;