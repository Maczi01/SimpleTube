import styled from "styled-components";
import React from "react";
import logo from "../assets/logo.png"

const HeaderWrapper = styled.nav`
    width: 100vw;
    height: 90px;
    padding: 0;
    margin: 0;
    background-color: #3da9fc;
    display: flex;
    align-items: center;
    color: #094067
`

const StyledTitle = styled.h1`
    margin: 0 0 0 50px ;
    padding: 0;
    align-items: center;
    justify-content: center;
`

const LogoWrapper = styled.img`
  min-width: 50px;
  height: 50px;
  margin: 0  20px;
`


const Header = () => (
    <HeaderWrapper>
        <StyledTitle>
            SimpleTube
        </StyledTitle>
        <LogoWrapper src={logo}/>
    </HeaderWrapper>
)

export default Header
