import React from 'react';
import styled from 'styled-components';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  align-self: stretch;
  margin-bottom: 5px;
`;

const LinksContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 20px;

  span {
    margin: 0 20px;

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

  @media (max-width: 380px) {
    span a {
      font-size: 1rem;
    }
  }
`;

const Copyright = styled.small`
  text-align: center;
`;

const Border = styled.div`
  width: 500px;
  max-width: 100%;
  border-top: 2px solid darkorange;
  align-self: center;
`;

const Footer = () => (
  <Container>
    <Border />
    <LinksContainer>
      <span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.twitter.com/jgvarandas"
        >
          TWITTER
        </a>
      </span>
      <span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://github.com/gvarandas"
        >
          GITHUB
        </a>
      </span>
      <span>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="mailto:jgvarandas@gmail.com"
        >
          EMAIL
        </a>
      </span>
    </LinksContainer>
    <Copyright>
      &copy; Copyright {new Date().getFullYear()}, Guilherme Varandas
    </Copyright>
  </Container>
);

export default Footer;
