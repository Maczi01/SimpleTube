import styled from "styled-components";
import React from "react";

const HeaderWrapper = styled.nav`
    width: 100vw;
    height: 70px;
    background-color: yellow;
    margin: 0;
    padding: 0;
`


const Header = () => (
    <HeaderWrapper>
        <h1>
            SimpleTube
        </h1>
    </HeaderWrapper>
)

export default Header
