import React from 'react'
import styled from 'styled-components';


const Logo = styled.h1`
    font-size: 28px;
    color: #ffffff;
    text-transform: uppercase;
`;

const Header = () => {
return (
        <header>
            <Logo>the planets</Logo>
            <nav>
                <ul>
                    <li>mercury</li>
                    <li>venus</li>
                    <li>earth</li>
                    <li>mars</li>
                    <li>jupiter</li>
                    <li>saturn</li>
                    <li>uranus</li>
                    <li>neptune</li>
                </ul>
            </nav>
        </header>
    )
}

export default Header

