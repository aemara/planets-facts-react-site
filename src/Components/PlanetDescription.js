import React from 'react';
import styled from 'styled-components';

const DescriptionSection = styled.section`
  color: #ffffff;
  text-align: ${({ screenSize }) => screenSize !== "mobile" ? "left" : "center"};
  width: ${({ screenSize }) => (screenSize === "tablet" ? "50%" : "100%")};
  max-width: ${({ screenSize }) => screenSize === "mobile" && "470px"};
  display: ${({ screenSize }) => (screenSize !== "mobile" ? "flex" : "")};
  flex-direction: ${({ screenSize }) =>
    screenSize !== "mobile" ? "column" : ""};
  align-items: ${({ screenSize }) =>
    screenSize !== "mobile" ? "flex-start" : ""};
`;

const PlanetTitle = styled.h2`
    font-family: var(--ff-antonio);
    font-size: ${({ screenSize }) => (screenSize === "desktop" ? "5rem" : "2.5rem")};
    text-transform: uppercase;
    margin-bottom: .5em;
`;

const Description = styled.p`
  font-size: ${({ screenSize }) =>
    screenSize === "desktop" ? ".875rem" : ".68rem"};
  font-family: var(--ff-spartan);
  line-height: 22px;
  margin-bottom: 3.5em;
`;

const SourceLink = styled.div`
  font-family: var(--ff-spartan);
  font-size: ${({ screenSize }) =>
    screenSize === "desktop" ? ".875rem" : ".75rem"};
  text-transform: capitalize;
  display: flex;
  align-items: center;
  justify-content: center;

  & span {
    opacity: 0.5;
  }

  & a {
    font-weight: 700;
    color: #ffffff;
    opacity: 0.5;
    margin-right: 0.2em;
    margin-left: 0.2em;
  }
`;

export const PlanetDescription = ({planetData, aspect, screenSize}) => {

    const renderDescription = () => {
        if(aspect === 'overview') {
            return (planetData.overview.content);
        } else if(aspect === 'structure') {
            return (planetData.structure.content);
        } else {
            return (planetData.geology.content);
        }
        
    }

    
    const renderSource = () => {
        if (aspect === "overview") {
          return planetData.overview.source;
        } else if (aspect === "structure") {
          return planetData.structure.source;
        } else {
          return planetData.geology.source;
        }
    }
    

    return (
      <DescriptionSection screenSize={screenSize}>
        <PlanetTitle screenSize={screenSize}>{planetData.name}</PlanetTitle>
        <Description screenSize={screenSize}>{renderDescription()}</Description>
        <SourceLink screenSize={screenSize}>
          <span>source : </span>
          <a href={renderSource()}>wikipedia</a>
          <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
            <path
              fill="#FFF"
              d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
              opacity=".5"
            />
          </svg>
        </SourceLink>
      </DescriptionSection>
    );
}

export default PlanetDescription;
