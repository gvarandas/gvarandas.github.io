import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Router } from "@reach/router"

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Posts from './pages/Posts';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,700');

  * {
    box-sizing: border-box;
    font-family: "Gilroy", "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
  }
  body {
    margin: 0;
    padding: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
    height: 100%;
    background-color: #fff;
  }
`

const AppContainer = styled.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const StyledRouter = styled(Router)`
  display: flex;
  flex: 1;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      <Header />
      <StyledRouter primary={false}>
        <Home path="/" default />
        <Posts path="blog" />
      </StyledRouter>
      <Footer />
    </AppContainer>
  </>
);

export default App;
