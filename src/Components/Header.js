import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';
import data from "../data.json";

const HeaderElement = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  
`;

const Logo = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 28px;
  color: #ffffff;
  text-transform: uppercase;
  margin-bottom: ${({ screenSize }) => (screenSize === "tablet" ? "1.5em" : "0")};
  padding-top: ${({ screenSize }) => (screenSize === "tablet" ? "1em" : "0")};
`;

const Container = styled.div`
    width: 100%;
    padding: 1em 1.5em;
    display: flex;
    align-items center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(151, 151, 151, 0.1);
`;

const NavigationMobile = styled.nav`
  display: ${({ showMenu }) => (showMenu ? "flex" : "none")};
  position: absolute;
  top: 69px;
  z-index: 1000;
  flex-direction: column;
  width: 100%;
  background: #070724;
  align-items: center;
  padding: 2em 1.5em;
`;

const Navigation = styled.nav`
  display: flex;
  width: 100%;
  padding: 0 2em 2.5em 2em;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);
`;

const NavButtonMobile = styled.button`
  font-family: "Spartan", sans-serif;
  font-size: 15px;
  text-transform: uppercase;
  letter-spacing: 1.36px;
  font-weight: 700;
  border: none;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);
  background: none;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding-top: 1.5em;
  padding-bottom: 1.5em;
  padding-right: 0.5em;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
      border: none;
  }
`;

const NavButton = styled.button`
  font-family: "Spartan", sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  letter-spacing: 1.36px;
  font-weight: 700;
  border: none;
  background: none;
  width: 100%;
  color: #ffffff;
  opacity: .6;
`;

const NavColoredIcon = styled.div`
    width: 20px;
    height: 20px;
    background: ${({color}) => color};
    border-radius: 20px;
    
`



const Header = ({planet, changePlanet, screenSize}) => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        if(showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

    const renderHeader = () => {
      
      if(screenSize === 'tablet') {
        const navList = data.map((planet) => (
          <NavButton>{planet.name}</NavButton>
        ));
        return (
          <HeaderElement>
            <Logo screenSize = {screenSize}>the planets</Logo>
            <Navigation showMenu = {true}>
              {navList}
            </Navigation>
          </HeaderElement>
        );
      } else if (screenSize === 'mobile') {
        const navList = data.map((planet) => (
          <NavButtonMobile onClick={() => {
                  changePlanet(planet.name);
                  setShowMenu(false);
                }}>
            <NavColoredIcon
              color={`var(--clr-nav-icon-${planet.name})`}
            ></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>{planet.name}</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButtonMobile>
        ));
        return (
          <HeaderElement>
            <Container>
              <Logo>the planets</Logo>

              <svg
                className="menu-icon"
                onClick={handleMenuClick}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="17"
              >
                <g fill={showMenu ? "#979797" : "#FFF"} fill-rule="evenodd">
                  <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
                </g>
              </svg>
            </Container>
            <NavigationMobile showMenu = {showMenu}>{navList}</NavigationMobile>
          </HeaderElement>
        );
    }
  }

    return (
      renderHeader()
    );
}

export default Header

