import styled from "styled-components";
import React from "react";

const HeaderWrapper = styled.nav`
    width: 100%;
    height: 70px;
    padding: 0;
    margin: 0;
    background-color: yellow;
`

const StyledTitle = styled.h1`
    margin: 0;
    padding: 0;
`


const Header = () => (
    <HeaderWrapper>
        <StyledTitle>
            SimpleTube
        </StyledTitle>
    </HeaderWrapper>
)

export default Header
