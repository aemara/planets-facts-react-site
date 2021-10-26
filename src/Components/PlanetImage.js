import React from 'react'
import styled from 'styled-components'


const ImageSection = styled.section`
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 4em;
    margin-bottom: 4.2em;
`


const PlanetImage = ({planetData, aspect}) => {
    
    const renderImage = () => {
        if(aspect === 'overview') {
            return (planetData.images.planet)
        } else if(aspect === 'structure') {
            return (planetData.images.internal)
        } 
    }

    return (
      <ImageSection>
        <img src={renderImage()} style={{ width: "50%" }} alt="planet" />
        
      </ImageSection>
    );
}

export default PlanetImage
