import React from "react";
import styled from "styled-components";
import logoImage from "../../assets/images/logoImage.jpg";

const LogoImg = styled.div`
  width: 20%;
  height: 60px;
  background-image: url(${logoImage});
  background-repeat: no-repeat;
  background-size: 200px;
`;

function Header() {
  return (
    <>
      <nav className="shadow-lg pb-0">
        <LogoImg className="mr-0 flex"/>
      </nav>
    
    </>
  );
}

export default Header;
