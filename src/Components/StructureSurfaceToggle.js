import React from 'react'
import styled from 'styled-components'


const MobileToggle = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);
  padding: 1.5em 2em 0 2em;
  justify-content: space-between;

`;


const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  font-family: "Spartan", sans-serif;
  font-size: 0.56rem;
  gap: 1.5em;
`;

const MobileToggleButton = styled.button`
  font-family: "Spartan", sans-serif;
  font-size: 0.56rem;
  text-transform: uppercase;
  letter-spacing: 1.93px;
  font-weight: 700;
  border: none;
  padding: 0 .3em 2em .3em;
  background: none;
  color: #ffffff;
  border-bottom: ${({active}) => active ? '4px solid rgba(65, 158, 187, 1)' : '4px solid rgba(65, 158, 187, 0)'};

  &:active {
    border-bottom: 4px solid rgba(65, 158, 187, 1);
  }
`;

const ToggleButton = styled.button`
  letter-spacing: 1.93px;
  font-size: 0.56rem;
  text-transform: uppercase;
  font-weight: 700;
  background: ${({ active, planet }) => (active ? `var(--clr-toggle-${planet})` : 'none')};
  color: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.2);
  display: flex;
  padding: 1.5em 7em 1.5em 2em;
  

  &:hover {
    background: ${({ planet }) => `var(--clr-toggle-${planet})`};
  }

  &:focus {
    background: ${({ planet }) => `var(--clr-toggle-${planet})`};
  }

  &:active {
    background: ${({ planet }) => `var(--clr-toggle-${planet})`};
  }
`;

const ToggleText = styled.p`
`;

const ToggleNumber = styled.p`
  margin-right: 1.5em;
  opacity: .6;
`;



const StructureSurfaceToggle = ({aspect, changeAspect, screenSize, planet}) => {

  const renderToggle = () => {
      if(screenSize === 'mobile') {
        return (
          <MobileToggle>
            <MobileToggleButton
              onClick={() => changeAspect("overview")}
              active={aspect === "overview" ? true : false}
            >
              overview
            </MobileToggleButton>
            <MobileToggleButton
              onClick={() => changeAspect("structure")}
              active={aspect === "structure" ? true : false}
            >
              structure
            </MobileToggleButton>
            <MobileToggleButton
              onClick={() => changeAspect("surface")}
              active={aspect === "surface" ? true : false}
            >
              surface
            </MobileToggleButton>
          </MobileToggle>
        );
      } else {
        return (
          <Toggle>
            <ToggleButton
              onClick={() => changeAspect("overview")}
              active={aspect === "overview" ? true : false}
              planet={planet}
            >
              <ToggleNumber>01</ToggleNumber>
              <ToggleText>overview</ToggleText>
            </ToggleButton>
            <ToggleButton
              onClick={() => changeAspect("structure")}
              active={aspect === "structure" ? true : false}
              planet={planet}
            >
              <ToggleNumber>02</ToggleNumber>
              <ToggleText>internal structure</ToggleText>
            </ToggleButton>
            <ToggleButton
              onClick={() => changeAspect("surface")}
              active={aspect === "surface" ? true : false}
              planet={planet}
            >
              <ToggleNumber>03</ToggleNumber>
              <ToggleText>surface geology</ToggleText>
            </ToggleButton>
          </Toggle>
        );
      }
  }
    return (
      renderToggle()
    );
}

export default StructureSurfaceToggle
