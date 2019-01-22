import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: "Gilroy", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
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
  min-width: 100vw;
`;

const App = () => (
  <>
    <GlobalStyle />
    <AppContainer>
      {/* <Header /> */}
      <Main />
      <Footer />
    </AppContainer>
  </>
);

export default App;
