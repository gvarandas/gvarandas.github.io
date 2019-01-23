import React from 'react';
import styled, { keyframes } from 'styled-components';
import ProfilePicture from '../images/Guilherme.png';

const MainContainer = styled.main`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const MainTitle = styled.h1`
  font-size: 8rem;
  line-height: 1;
  text-align: center;

  @media (max-width: 768px)  {
    margin-left: 15px;
    margin-right: 15px;
    font-size: 7rem;
  }

  @media (max-width: 380px)  {
    font-size: 6rem;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`;

const colorTransition = keyframes`
  0% { color: black; }
  50% { color: darkorange; }
  100% { color: black; }
`;

const OrangeTitle = styled.span`
  color: darkorange;
  animation: ${colorTransition} 10s infinite linear;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (max-width: 768px)  {
    margin: 40px 20px;
  }

  @media (max-width: 380px)  {
    p {
      margin-bottom: 0;
    }
  }
`;

const PictureContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 20px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 20px;

  @media (max-width: 768px)  {
    flex-direction: column;
  }
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const Home = () => (
  <MainContainer>
    <MainTitle>
      HELLO <OrangeTitle>THERE</OrangeTitle>
    </MainTitle>
    <ContentContainer>
      <PictureContainer>
        <Image src={ProfilePicture} />
      </PictureContainer>
      <DescriptionContainer>
        <p>My name is <b>Guilherme Varandas</b> and I build things.</p>
        <p>With a diverse set of skills, including <i>HTML</i>, <i>CSS</i> and <i>JavaScript</i>, I <b>LOVE</b> to work with cool stuff.</p>
        <p>From component bits using React, Vue or Angular, all the way to scalable APIs.</p>
      </DescriptionContainer>
    </ContentContainer>
  </MainContainer>
);

export default Home;
