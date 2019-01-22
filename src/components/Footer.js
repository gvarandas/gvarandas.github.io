import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-self: stretch;
  margin: 20px;

  span {
    margin-right: 40px;

    a {
      font-size: 1.25rem;
      color: #000;
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

const Footer = () => (
  <FooterContainer>
    <span>
      <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/jirotheone">TWITTER</a>
    </span>
    <span>
      <a target="_blank" rel="noopener noreferrer" href="https://github.com/gvarandas">GITHUB</a>
    </span>
    <span>
      <a target="_blank" rel="noopener noreferrer" href="mailto:jgvarandas@gmail.com">EMAIL</a>
    </span>
  </FooterContainer>
);

export default Footer;
