import React from 'react';
import styled from 'styled-components';

const QuantativeInfoSection = styled.div`
    color: #ffffff;
    margin-top: 1.75em; 
    width: 100%;
    ${({screenSize}) => screenSize === 'tablet' ? 'display: flex; gap: 1em;' : ''}
`;

const Attribute = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.2);
  padding: ${({ screenSize }) =>
    screenSize === "tablet" ? "1.2em .8em" : ".6em 1.5em"};
  display: flex;
  ${({ screenSize }) =>
    screenSize === "tablet" ? "flex-direction: column; width: 25%;" : ""}
  justify-content: space-between;
  align-items: ${({ screenSize }) =>
    screenSize === "tablet" ? "flex-start" : "center"};
  text-transform: uppercase;
  margin-bottom: ${({ screenSize }) =>
    screenSize === "tablet" ? "0" : ".7em"};

  gap: ${({ screenSize }) => (screenSize === "tablet" ? '.7em' : '0')};
`;

const AttributeName = styled.p`
    font-family: var(--ff-spartan);
    font-size: .5rem;
    font-weight: 700;
    opacity: .5;
      
`;

const AttributeValue = styled.p`
  font-family: var(--ff-antonio);
  font-size: ${({ screenSize }) =>
    screenSize === "tablet" ? '1.5rem' : '1.25rem'};
`;



const QuantativeInfo = ({planetData, screenSize}) => {
    return (
      <QuantativeInfoSection screenSize={screenSize}>
        <Attribute screenSize={screenSize}>
          <AttributeName>rotation time</AttributeName>
          <AttributeValue>{planetData.rotation}</AttributeValue>
        </Attribute>
        <Attribute screenSize={screenSize}>
          <AttributeName>revolution time</AttributeName>
          <AttributeValue>{planetData.revolution}</AttributeValue>
        </Attribute>
        <Attribute screenSize={screenSize}>
          <AttributeName>radius</AttributeName>
          <AttributeValue>{planetData.radius}</AttributeValue>
        </Attribute>
        <Attribute screenSize={screenSize}>
          <AttributeName>average temp.</AttributeName>
          <AttributeValue>{planetData.temperature}</AttributeValue>
        </Attribute>
      </QuantativeInfoSection>
    );
}

export default QuantativeInfo
