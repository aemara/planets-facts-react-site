import React from 'react'
import styled from 'styled-components'


const ImageSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: ${({ screenSize }) => (screenSize === "desktop" ? "0" : "4em 0")};
    width: ${({ screenSize }) => (screenSize === "desktop" ? "55%" : "auto")};
`;

const Image = styled.img`
  max-width: ${({ screenSize }) => (screenSize !== "desktop" ? "70%" : "100%")};
`;

const SurfaceImage = styled.img`
  width: ${({ screenSize }) => {
    if (screenSize === "desktop") return "163px";
    else if (screenSize === "tablet") return "100px";
    else return "100px";
  }};
  position: absolute;
  top: ${({ screenSize }) => {
    if (screenSize === "desktop") return "554px";
    else if (screenSize === "tablet") return "400px";
    else return "350px";
  }};
`;

const PlanetImage = ({planetData, aspect, screenSize}) => {
    
    const renderImage = () => {
        if(aspect === 'overview') {
            return (planetData.images.planet)
        } else if(aspect === 'structure') {
            return (planetData.images.internal)
        } else {
            return (planetData.images.planet)
        }
    }
    
    return (
      <ImageSection screenSize={screenSize}>
        <Image screenSize={screenSize} src={renderImage()} alt={"planet"} />
        {aspect === "surface" && (
          <SurfaceImage
            screenSize={screenSize}
            src={planetData.images.geology}
            alt={"planet"}
          />
        )}
      </ImageSection>
    );
}

export default PlanetImage
