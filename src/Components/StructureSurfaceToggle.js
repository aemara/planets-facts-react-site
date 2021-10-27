import React from 'react'
import styled from 'styled-components'


const MobileToggle = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(151, 151, 151, 0.1);
  padding: 1.5em 2em 0 2em;
  justify-content: space-between;
`;

const ToggleButton = styled.button`
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

  &:hover {
    cursor: pointer;
    border-bottom: 4px solid rgba(65, 158, 187, 1);
  }
`;

const StructureSurfaceToggle = ({aspect, changeAspect}) => {
    return (
      <MobileToggle>
        <ToggleButton
          onClick={() => changeAspect("overview")}
          active={aspect === "overview" ? true : false}
        >
          overview
        </ToggleButton>
        <ToggleButton
          onClick={() => changeAspect("structure")}
          active={aspect === "structure" ? true : false}
        >
          structure
        </ToggleButton>
        <ToggleButton
          onClick={() => changeAspect("surface")}
          active={aspect === "surface" ? true : false}
        >
          surface
        </ToggleButton>
      </MobileToggle>
    );
}

export default StructureSurfaceToggle
