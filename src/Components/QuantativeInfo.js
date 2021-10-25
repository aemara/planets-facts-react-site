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



const QuantativeInfo = () => {
    return (
      <QuantativeInfoSection>
        <Attribute rotation>
          <AttributeName>rotation time</AttributeName>
          <AttributeValue>0.99 days</AttributeValue>
        </Attribute>
        <Attribute revolution>
          <AttributeName>revolution time</AttributeName>
          <AttributeValue>365.26 days</AttributeValue>
        </Attribute>
        <Attribute radius>
          <AttributeName>radius</AttributeName>
          <AttributeValue>6371 km</AttributeValue>
        </Attribute>
        <Attribute temperature>
          <AttributeName>average temp.</AttributeName>
          <AttributeValue>16ºc</AttributeValue>
        </Attribute>
      </QuantativeInfoSection>
    );
}

export default QuantativeInfo
