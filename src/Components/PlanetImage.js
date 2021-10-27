import React from 'react'
import styled from 'styled-components'


const ImageSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4em;
    margin-bottom: 4.2em;
`


const PlanetImage = ({planetData, aspect}) => {
    
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
      <ImageSection>
        <img src={renderImage()} style={{ 'max-width': "50%" }} alt="planet" />
        {aspect === "surface" && (
          <img src={planetData.images.geology} style={{ width: "20%" , 'margin-top': '-5em'}} alt="planet" />
        )}
      </ImageSection>
    );
}

export default PlanetImage
