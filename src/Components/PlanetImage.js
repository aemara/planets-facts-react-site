import React from 'react'
import styled from 'styled-components'
import image from '../assets/planet-earth.svg';

const ImageSection = styled.section`
    display: flex;
    justify-content: center;
    align-self: center;
    margin-top: 4em;
    margin-bottom: 4.2em;
`

const PlanetImage = () => {
    return (
      <ImageSection>
        <img
          src={image}
          style={{ 'width': '50%'}}
          alt="planet"
        />
      </ImageSection>
    );
}

export default PlanetImage
