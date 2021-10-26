import React from 'react';
import styled from 'styled-components';

const QuantativeInfoSection = styled.div`
    color: #ffffff;
    margin-top: 1.75em; 
`;

const Attribute = styled.div`
    border: 1px solid rgba(255,255,255,.2);
    padding: .6em 1.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;
    margin-bottom: .7em;
`;

const AttributeName = styled.p`
    font-family: var(--ff-spartan);
    font-size: .5rem;
    font-weight: 700;
    opacity: .5;
      
`;

const AttributeValue = styled.p`
    font-family: var(--ff-antonio);
    font-size: 1.25rem;
`;



const QuantativeInfo = ({planetData}) => {
    return (
      <QuantativeInfoSection>
        <Attribute >
          <AttributeName>rotation time</AttributeName>
          <AttributeValue>{planetData.rotation}</AttributeValue>
        </Attribute>
        <Attribute >
          <AttributeName>revolution time</AttributeName>
          <AttributeValue>{planetData.revolution}</AttributeValue>
        </Attribute>
        <Attribute >
          <AttributeName>radius</AttributeName>
          <AttributeValue>{planetData.radius}</AttributeValue>
        </Attribute>
        <Attribute >
          <AttributeName>average temp.</AttributeName>
          <AttributeValue>{planetData.temperature}</AttributeValue>
        </Attribute>
      </QuantativeInfoSection>
    );
}

export default QuantativeInfo
