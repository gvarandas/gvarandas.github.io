import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainTitle = styled.h1`
  font-size: 8rem;
`;

const Main = () => (
  <MainContainer>
    <MainTitle>HELLO THERE</MainTitle>
    <p>My name is Guilherme Varandas and I'm a Brazilian fullstack developer.</p>
    <p>With a diverse set of skills, ranging from HTML + CSS and, mainly, JavaScript, I LOVE to build cool stuff.</p>
    <p>From component bits using React, Ember or Angular, all the way to scalable APIs.</p>
  </MainContainer>
);

export default Main;
