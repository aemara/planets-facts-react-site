import React from 'react'
import { useState } from 'react';
import styled from 'styled-components';

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
`;

const Container = styled.div`
    width: 100%;
    padding: 1em 1.5em;
    display: flex;
    align-items center;
    justify-content: space-between;
    border-bottom: 1px solid rgba(151, 151, 151, 0.1);
`;

const Navigation = styled.nav`
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

const NavButton = styled.button`
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

const NavColoredIcon = styled.div`
    width: 20px;
    height: 20px;
    background: ${({color}) => color};
    border-radius: 20px;
    
`



const Header = () => {

    const [showMenu, setShowMenu] = useState(false);

    const handleMenuClick = () => {
        if(showMenu) {
            setShowMenu(false);
        } else {
            setShowMenu(true);
        }
    }

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
            <g fill= {showMenu ? '#979797' : '#FFF'} fill-rule="evenodd">
              <path d="M0 0h24v3H0zM0 7h24v3H0zM0 14h24v3H0z" />
            </g>
          </svg>
        </Container>

        <Navigation showMenu={showMenu}>
          <NavButton>
            <NavColoredIcon color="var(--clr-nav-icon-mercury)"></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>mercury</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButton>
          <NavButton>
            <NavColoredIcon color="var(--clr-nav-icon-venus)"></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>venus</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButton>
          <NavButton>
            <NavColoredIcon color="var(--clr-nav-icon-earth)"></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>earth</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButton>
          <NavButton>
            <NavColoredIcon color="var(--clr-nav-icon-mars)"></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>mars</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButton>
          <NavButton>
            <NavColoredIcon color="var(--clr-nav-icon-jupiter)"></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>jupiter</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButton>
          <NavButton>
            <NavColoredIcon color="var(--clr-nav-icon-saturn)"></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>saturn</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButton>
          <NavButton>
            <NavColoredIcon color="var(--clr-nav-icon-uranus)"></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>uranus</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButton>
          <NavButton>
            <NavColoredIcon color="var(--clr-nav-icon-neptune)"></NavColoredIcon>
            <p style={{ width: "80%", "text-align": "left" }}>neptune</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="6" height="8">
              <path fill="none" stroke="#FFF" opacity=".4" d="M1 0l4 4-4 4" />
            </svg>
          </NavButton>
        </Navigation>
      </HeaderElement>
    );
}

export default Header

