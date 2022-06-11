import React from 'react'
import backgroundImg from "../../../assets/images/backgroundSkateImage.jpeg";
import styled from "styled-components";
import WelcomeHeader from './WelcomeHeader'
import WelcomeContent from './WelcomeContent'
import WelcomeFooter from './WelcomeFooter'

const WelcomeStyle = styled.div`
  position: "absolute";
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0.2) 100%
    ),
    url(${backgroundImg});
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat, repeat;
`;

function WelcomeContainer() {
  return (
    <>
    <WelcomeStyle>
    <WelcomeHeader />
    <WelcomeContent />
    <WelcomeFooter />
    </WelcomeStyle>
    </>
  )
}

export default WelcomeContainer